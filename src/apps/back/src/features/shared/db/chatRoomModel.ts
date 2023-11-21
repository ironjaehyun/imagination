import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    room: String,
    members: [
      { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    ],
  },
  {
    timestamps: true,
  },
);

const roomModels = mongoose.model('Room', roomSchema);

export default roomModels;
