import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connection established');
  } catch (error) {
    console.log('MongoDB connection failed : ', error.message);
  }
};

export default connectToMongoDB;
