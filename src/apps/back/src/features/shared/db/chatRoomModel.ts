import mongoose from 'mongoose';

const ChatRoomSchema = new mongoose.Schema({
  room_title: String,
  room_desc: String,
  room_img: String,
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  opened_at: { type: Date, default: Date.now },
  room_limit: String,
  room_status: String,
});

const ChatRoomModel = mongoose.model('ChatRoom', ChatRoomSchema);

export default ChatRoomModel;
