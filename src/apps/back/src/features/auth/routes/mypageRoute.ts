import express from 'express';
import upload from '../../shared/imageUpload';

import { imageUpload } from '../controller/mypageController';

const router = express.Router();

router.post('/submit', upload.single('file'), imageUpload);

export default router;
