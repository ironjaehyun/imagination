import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  room_idx: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'ChatRoom' },
  ],
  talker: String,
  talk: String,
  emotion: String,
  talked_at: { type: Date, default: Date.now },
});

const ChatModel = mongoose.model('Chatting', ChatSchema);

export default ChatModel;
