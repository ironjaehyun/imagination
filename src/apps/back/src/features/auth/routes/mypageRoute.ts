import express from 'express';
import upload from '../../shared/imageUpload';

import { imageUpload, getUserData } from '../controller/mypageController';

const router = express.Router();

router.post(
  '/submit',
  upload.fields([{ name: 'bgImage' }, { name: 'profileImage' }]),
  imageUpload,
);

router.get('/user', getUserData);
export default router;
