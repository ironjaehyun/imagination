import mongoose from 'mongoose';

const SavedImageSchema = new mongoose.Schema({
  img1: { type: String, required: true },
  img2: { type: String },
  img3: { type: String },
  img4: { type: String },
  prompt: { type: String, required: true },
  negative_prompt: { type: String },
  saved_at: { type: Date, default: Date.now },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});

const SavedImageModel = mongoose.model('SavedImage', SavedImageSchema);

export default SavedImageModel;
