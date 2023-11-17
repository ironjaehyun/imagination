import express from 'express';
import upload from '../../shared/imageUpload';

import { imageUpload } from '../controller/mypageController';

const router = express.Router();

router.post('/', upload.single('img'), imageUpload);

export default router;
