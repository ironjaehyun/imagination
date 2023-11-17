import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import axios from 'axios';

const s3 = new S3Client({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
  },
});

const imgUpload = async (req, res) => {
  const images = req.body.images;
  const userId = req.body.userId;
  for (const [index, url] of images.entries()) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const uploadParams = {
      Bucket: 'imagination-leechi',
      Key: `${userId}/image${index}.webp`, //업로드시 파일명 변경가능
      Body: response.data,
    };
    try {
      const data = await s3.send(new PutObjectCommand(uploadParams));
      console.log('이미지 업로드 성공', data);
    } catch (err) {
      console.error('이미지 업로드 실패', err);
    }
  }
  res.send('업로드 성공');
};

export { imgUpload };
