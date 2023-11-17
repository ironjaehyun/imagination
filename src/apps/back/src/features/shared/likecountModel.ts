import mongoose from 'mongoose';
// 좋아요 수 스키마
const LikesSchema = new mongoose.Schema({
  post: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Post' }],
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  liked_at: { type: Date, default: Date.now },
});

const LikesModel = mongoose.model('Likes', LikesSchema);

export default LikesModel;
