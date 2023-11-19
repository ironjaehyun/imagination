import userModel from '../../shared/db/userModel';
import PostModel from '../../shared/db/postModel';
import mongoose from 'mongoose';
const imageUpload = async (req, res) => {
  console.log('test');
  console.log(req.files);
  const userProfilePath = req.files['profileImage'][0].location;
  const userBackgroundlPath = req.files['bgImage'][0].location;
  const id = req.body.id;
  const status = req.body.status;
  console.log(status);
  const user = await userModel.findOne({ id: id }).exec(); // 인스턴스화 시켜줘야함

  if (user) {
    user.user_background_img = userBackgroundlPath;
    user.user_profile_img = userProfilePath;
    user.user_status_msg = status;
    await user.save();
    await res.json({
      background: userBackgroundlPath,
      profile: userProfilePath,
      status: status,
    });
  } else {
    res.json({ msg: 'User does not exist' });
  }
};

const clickPost = async (req, res) => {
  const ownerId = new mongoose.Types.ObjectId(req.query._id);
  console.log(ownerId);
  const result = await PostModel.find({ owner: ownerId });
  res.json(result);
};

export { imageUpload, clickPost };
