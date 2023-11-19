import userModel from '../../shared/db/userModel';
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
  const ownerId = new mongoose.Types.ObjectId(req.query._id);
  console.log(ownerId);
  const result = await userModel.findById(ownerId).populate('posts');
  res.json(result);
  console.log(result.posts);
};

export { imageUpload, getUserData };
