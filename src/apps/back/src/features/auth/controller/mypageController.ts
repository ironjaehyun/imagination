import userModel from '../../shared/db/userModel';
import followModel from '../../shared/db/followModel';
import followerModel from '../../shared/db/followerModel';
import mongoose from 'mongoose';

const imageUpload = async (req, res) => {
  const userProfilePath = req.files['profileImage'][0].location;
  const userBackgroundlPath = req.files['bgImage'][0].location;
  const id = req.body.id;
  const status = req.body.status;

  const updatedUser = await userModel
    .findOneAndUpdate(
      { id: id },
      {
        $set: {
          user_background_img: userBackgroundlPath,
          user_profile_img: userProfilePath,
          user_status_msg: status,
        },
      },
      { new: true },
    )
    .exec();

  if (!updatedUser) {
    return res.json({ msg: 'User does not exist' });
  }

  return res.json({
    background: userBackgroundlPath,
    profile: userProfilePath,
    status: status,
  });
};

const getUserData = async (req, res) => {
  const ownerId = new mongoose.Types.ObjectId(req.query.id);

  const result = await userModel
    .findById(ownerId)
    .populate({
      path: 'posts',
      populate: { path: 'owner', select: 'user_profile_img id' },
    })
    .populate({
      path: 'follow',
      populate: { path: 'follow', select: 'user_profile_img id' },
    })
    .populate({
      path: 'follower',
      populate: { path: 'follower', select: 'user_profile_img id' },
    })
    .populate('saved_images');
  res.json(result);
};

const AddFollow = async (req, res) => {
  const { owner, follow, unfollow } = req.body;
  const ownerId = new mongoose.Types.ObjectId(req.body.owner);
  const followId = new mongoose.Types.ObjectId(req.body.follow);
  if (unfollow) {
    const addFollow = new followModel({ owner: ownerId, follow: followId });
    const addFollower = new followerModel({
      owner: followId,
      follower: ownerId,
    });

    const [user, followerUser] = await Promise.all([
      userModel.findById(ownerId),
      userModel.findById(followId),
    ]);

    await Promise.all([
      addFollow.save(),
      addFollower.save(),
      new Promise((resolve) => {
        user.follow.push(addFollow._id);
        user.save();
        resolve({});
      }),
      new Promise((resolve) => {
        followerUser.follower.push(addFollower._id);
        followerUser.save();
        resolve({});
      }),
    ]);
  } else {
    const ownerId = new mongoose.Types.ObjectId(owner);
    const followId = new mongoose.Types.ObjectId(follow);
    await Promise.all([
      followModel.deleteOne({ owner: ownerId, follow: followId }),
      followerModel.deleteOne({ owner: followId, follower: ownerId }),
    ]);
  }
  // 만약에 userId랑 Id랑 같이 있다면 true값을 보내라..
  res.json({ follow: 'true' });
};

export { imageUpload, getUserData, AddFollow };
