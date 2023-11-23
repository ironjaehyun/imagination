import mongoose from 'mongoose';
// 포스트 스키마
const PostSchema = new mongoose.Schema({
  post_title: String,
  post_content: String,
  post_prompt: String,
  post_negative_prompt: String,
  posted_at: { type: Date, default: Date.now },
  post_hashtag: { type: [String], default: '' },
  post_img1: { type: String },
  post_img2: { type: String },
  post_img3: { type: String },
  post_img4: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  likes: { type: Number, default: 0 },
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
