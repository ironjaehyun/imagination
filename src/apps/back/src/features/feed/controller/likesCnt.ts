import PostModel from '../../shared/db/postModel';
import mongoose from 'mongoose';
import userModel from '../../shared/db/userModel';
const likes = async (req, res) => {
  const { userId, postId, isLiked } = req.body;
  console.log(userId, postId);
  const postObjectId = new mongoose.Types.ObjectId(postId);
  const userObjectId = new mongoose.Types.ObjectId(userId);
  console.log(postObjectId);
  const user = await userModel.findById(userObjectId);

  const post = await PostModel.findById(postObjectId);

  if (isLiked) {
    user.like.push(postObjectId);
    post.like.push(user._id);
  } else {
    // 좋아요를 한 번이라도 눌렀다면 좋아요를 취소할 수 있습니다.
    if (user.like.includes(postObjectId)) {
      user.like = user.like.filter(
        (id) => id.toString() !== postObjectId.toString(),
      );
      post.like = post.like.filter(
        (id) => id.toString() !== userObjectId.toString(),
      );
    }
  }

  await post.save();
  await user.save();
  res.json({ likeCount: post.like.length });
};

export { likes };
