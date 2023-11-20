import userModel from '../../shared/db/userModel';
import followModel from '../../shared/db/followModel';
import followerModel from '../../shared/db/followerModel';
import mongoose from 'mongoose';

const imageUpload = async (req, res) => {
  try {
    console.log('test');
    console.log(req.files);
    const userProfilePath = req.files['profileImage'][0].location;
    const userBackgroundlPath = req.files['bgImage'][0].location;
    const id = req.body.id;
    const status = req.body.status;
    console.log(status);

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
  } catch (error) {
    console.error('Error occurred:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getUserData = async (req, res) => {
  const ownerId = new mongoose.Types.ObjectId(req.query.id);

  const result = await userModel
    .findById(ownerId)
    .populate('posts')
    .populate('follow')
    .populate('follower');
  console.log('resultuser', result);
  res.json(result);
};

const AddFollow = async (req) => {
  const { owner, follow, unfollow } = req.body;
  console.log('owner, follow', owner, follow);
  console.log(unfollow);
  const ownerId = new mongoose.Types.ObjectId(req.body.owner);
  const followId = new mongoose.Types.ObjectId(req.body.follow);
  if (unfollow) {
    console.log('ownerId', ownerId);
    const addFollow = new followModel({ owner: ownerId, follow: followId });
    await addFollow.save();
    const user = await userModel.findById(ownerId);

    user.follow.push(addFollow._id);
    await user.save();
    console.log('user.follow들어갓냐', user.follow);
    const addFollower = new followerModel({
      owner: followId,
      follower: ownerId,
    });
    await addFollower.save();

    const followerUser = await userModel.findById(followId);

    followerUser.follower.push(addFollower._id);
    await followerUser.save();
    console.log('follower 들어갓냐', followerUser.follower);
  } else {
    const ownerId = new mongoose.Types.ObjectId(owner);
    const followId = new mongoose.Types.ObjectId(follow);
    await followModel.deleteOne({ owner: ownerId, follow: followId });
    await followerModel.deleteOne({ owner: followId, follower: ownerId });
  }
};

export { imageUpload, getUserData, AddFollow };
