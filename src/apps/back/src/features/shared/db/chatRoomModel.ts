import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
  {
    members: Array,
  },
  {
    timestamps: true,
  },
);

const chatModels = mongoose.model('Chat', chatSchema);

export default chatModels;
