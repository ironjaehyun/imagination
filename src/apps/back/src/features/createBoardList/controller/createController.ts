import SavedImageModel from '../../shared/db/savedImage';
import PostModel from '../../shared/db/postModel';
import mongoose from 'mongoose';
import userModel from '../../shared/db/userModel';

const savedImage = async (req) => {
  const { img1, img2, img3, img4, prompt, negative_prompt } = req.body;
  const ownerId = new mongoose.Types.ObjectId(req.body._id);
  const savedImg = new SavedImageModel({
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    prompt: prompt,
    negative_prompt: negative_prompt,
    owner: ownerId,
  });
  await savedImg.save();
};

const getSavedImage = async (req, res) => {
  const ownerId = new mongoose.Types.ObjectId(req.query._id);
  const result = await SavedImageModel.find({ owner: ownerId });
  res.json(result);
};

const createPost = async (req, res) => {
  console.log(req.body);
  const {
    owner,
    post_title,
    post_content,
    post_prompt,
    post_negative_prompt,
    post_img1,
    post_img2,
    post_img3,
    post_img4,
    post_hashtag,
  } = req.body;
  const ownerId = new mongoose.Types.ObjectId(owner);
  const post = new PostModel({
    owner: ownerId,
    post_title: post_title,
    post_content: post_content,
    post_negative_prompt: post_negative_prompt,
    post_prompt: post_prompt,
    post_img1: post_img1,
    post_img2: post_img2,
    post_img3: post_img3,
    post_img4: post_img4,
    post_hashtag: post_hashtag,
  });
  await post.save();

  const user = await userModel.findById(ownerId);
  user.posts.push(post._id);
  await user.save();
  res.json({ msg: 'create post' });
};
export { savedImage, getSavedImage, createPost };
