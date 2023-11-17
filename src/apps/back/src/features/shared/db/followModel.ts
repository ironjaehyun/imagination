import mongoose from 'mongoose';

const FollowSchema = new mongoose.Schema({
  follow: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});

const followModel = mongoose.model('Follow', FollowSchema);

export default followModel;
