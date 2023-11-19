import SavedImageModel from '../../shared/db/savedImage';
import PostModel from '../../shared/db/postModel';
import mongoose from 'mongoose';

const savedImage = async (req, res) => {
  const { img1, prompt, negative_prompt } = req.body;
  const ownerId = new mongoose.Types.ObjectId(req.body._id);
  const savedImg = new SavedImageModel({
    img1: img1,
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
  } = req.body;
  const ownerId = new mongoose.Types.ObjectId(owner);
  const post = new PostModel({
    owner: ownerId,
    post_title: post_title,
    post_content: post_content,
    post_negative_prompt: post_negative_prompt,
    post_prompt: post_prompt,
    post_img1: post_img1,
  });
  res.json({ msg: 'create post' });
  await post.save();
};
export { savedImage, getSavedImage, createPost };
