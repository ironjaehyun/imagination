import express from 'express';
import upload from '../../shared/imageUpload';

import { imageUpload } from '../controller/mypageController';

const router = express.Router();

router.post(
  '/submit',
  upload.fields([{ name: 'bgImage' }, { name: 'profileImage' }]),
  imageUpload,
);

export default router;
