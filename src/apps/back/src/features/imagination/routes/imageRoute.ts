import express from 'express';
import { imgUpload } from '../controller/imageController';
import { useSavedImage } from '../controller/useImageHistory';

const router = express.Router();

router.post('/', imgUpload);
router.get('/', useSavedImage);

export default router;
