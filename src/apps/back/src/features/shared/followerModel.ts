import mongoose from 'mongoose';

const FollowerSchema = new mongoose.Schema({
  follower: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});

const followerModel = mongoose.model('Follower', FollowerSchema);

export default followerModel;
