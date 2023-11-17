import mongoose from 'mongoose';
// 알람메시지 스키마
const AlarmSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  alarm_msg: String,
  created_at: { type: Date, default: Date.now },
  alarm_status: String,
});

const AlarmModel = mongoose.model('Alarm', AlarmSchema);

export default AlarmModel;
