import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import axios from 'axios';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import SavedImageModel from '../../shared/db/savedImage';
import userModel from '../../shared/db/userModel';
import mongoose from 'mongoose';

dotenv.config();

const s3 = new S3Client({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
  },
});

const imgUpload = async (req, res) => {
  const images = req.body.images;
  const { prompt, negative, userId } = req.body;
  const imageUrls = []; // 이미지 URL을 저장할 배열

  const ownerId = new mongoose.Types.ObjectId(userId);

  for (const [index, url] of images.entries()) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const uniqueKey = uuidv4(); // 고유한 키 생성
    const uploadParams = {
      Bucket: 'imagination-leechi',
      Key: `image${uniqueKey}.webp`,
      Body: response.data,
    };
    await s3.send(new PutObjectCommand(uploadParams));
    const imageUrl = `https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image${uniqueKey}.webp`;

    imageUrls.push(imageUrl); // 이미지 URL을 배열에 저장
  }
  const image = new SavedImageModel({
    owner: ownerId,
    img1: imageUrls[0],
    img2: imageUrls[1],
    img3: imageUrls[2],
    img4: imageUrls[3],
    prompt: prompt,
    negative_prompt: negative,
  });
  await image.save();

  const user = await userModel.findById(ownerId);
  user.saved_images.push(image._id);
  await user.save();
  res.send({ message: '업로드 성공', imageUrls: imageUrls }); // 업로드 성공 메시지와 함께 이미지 URL들을 반환
};

export { imgUpload };
