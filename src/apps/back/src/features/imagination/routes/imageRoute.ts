import express from 'express';
import { upload } from '../controller/imageController';

const router = express.Router();

router.post('/', upload);

export default router;
