import express from 'express';
import upload from '../../shared/imageUpload';

import { imageUpload, clickPost } from '../controller/mypageController';

const router = express.Router();

router.post(
  '/submit',
  upload.fields([{ name: 'bgImage' }, { name: 'profileImage' }]),
  imageUpload,
);

router.get('/post', clickPost);
export default router;
