import mongoose, { Schema } from 'mongoose';

const messageSchema: Schema = new Schema(
  {
    chatId: String,
    senderId: String,
    text: String,
    room: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Room' },
  },
  {
    timestamps: true,
  },
);

const messageModel = mongoose.model('Message', messageSchema);

export default messageModel;
