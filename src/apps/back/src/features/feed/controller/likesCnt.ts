import PostModel from '../../shared/db/postModel';
import mongoose from 'mongoose';
import userModel from '../../shared/db/userModel';
const likes = async (req, res) => {
  const { userId, postId } = req.body;
  console.log(userId, postId);
  const postObjectId = new mongoose.Types.ObjectId(postId);
  const userObjectId = new mongoose.Types.ObjectId(userId);
  console.log(postObjectId);
  const user = await userModel.findById(userObjectId);
  user.like.push(postObjectId);

  const post = await PostModel.findById(postObjectId);
  post.like.push(user._id);

  await post.save();
  await user.save();
  res.json(user);
};

export { likes };
