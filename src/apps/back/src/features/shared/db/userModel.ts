import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  password: { type: String, required: true },
  joined_at: { type: Date, default: Date.now },
  user_grade: { type: String, default: 'nomal' },
  user_profile_img: {
    type: String,
    default:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/profile.webp',
  },
  user_background_img: {
    type: String,
    default:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/background.webp',
  },
  user_status_msg: { type: String, default: '' },
  follow: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Follow' },
  ],
  follower: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Follower' },
  ],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  saved_images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SavedImage' }],
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
  },
});

// toJSON 메소드를 사용하여 반환되는 객체에서 password 필드 제외
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const userModel = mongoose.model('User', userSchema);

export default userModel;
