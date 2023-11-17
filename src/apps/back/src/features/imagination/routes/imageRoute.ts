import express from 'express';
import { imgUpload } from '../controller/imageController';

const router = express.Router();

router.post('/', imgUpload);

export default router;
