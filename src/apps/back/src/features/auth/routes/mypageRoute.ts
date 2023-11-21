import express from 'express';
import upload from '../../shared/imageUpload';

import {
  imageUpload,
  getUserData,
  AddFollow,
} from '../controller/mypageController';

const router = express.Router();

router.post(
  '/submit',
  upload.fields([{ name: 'bgImage' }, { name: 'profileImage' }]),
  imageUpload,
);

router.post('/follow', AddFollow);

router.get('/user', getUserData);
export default router;
