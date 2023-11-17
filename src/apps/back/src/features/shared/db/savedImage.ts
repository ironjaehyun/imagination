import mongoose from 'mongoose';

const SavedImageSchema = new mongoose.Schema({
  image_url: String,
  saved_at: { type: Date, default: Date.now },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});

const SavedImageModel = mongoose.model('SavedImage', SavedImageSchema);

export default SavedImageModel;
