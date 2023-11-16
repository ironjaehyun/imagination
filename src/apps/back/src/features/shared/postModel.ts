import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  post_title: { type: String, required: true },
  post_content: { type: String, required: true },
  post_prompt: { type: String, required: true },
  post_negative_prompt: { type: String, required: true },
  posted_at: { type: Date, default: Date.now },
  post_hashtag: String,
  post_img1: String,
  post_img2: String,
  post_img3: String,
  post_img4: String,
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
