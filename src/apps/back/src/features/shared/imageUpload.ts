import { S3Client } from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3';

const s3 = new S3Client({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: 'IAM에서 발급받은 액세스키',
    secretAccessKey: 'IAM에서 발급받은 시크릿키',
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: '버킷이름',
    key: function (요청, file, cb) {
      cb(null, Date.now().toString()); //업로드시 파일명 변경가능
    },
  }),
});

export default upload;
