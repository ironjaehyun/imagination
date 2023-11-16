import express from 'express';
import { postUpload } from '../controller/postController';

const router = express.Router();

router.post('/', postUpload);

export default router;
