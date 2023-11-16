import express from 'express';
import { postUpload } from '../controller/postController';
import { postModalData } from '../controller/postController';

const router = express.Router();

router.post('/', postUpload);
router.get('/getImage', postModalData);

export default router;
