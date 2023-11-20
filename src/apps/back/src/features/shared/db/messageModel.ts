// messageRoute.ts

import mongoose, { Document, Schema } from 'mongoose';

interface IMessage extends Document {
  chatId: string;
  senderId: string;
  text: string;
}

const messageSchema: Schema = new Schema(
  {
    chatId: String,
    senderId: String,
    text: String,
  },
  {
    timestamps: true,
  },
);

const messageModel = mongoose.model<IMessage>('Message', messageSchema);

export default messageModel;
