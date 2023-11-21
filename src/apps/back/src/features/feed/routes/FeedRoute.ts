import express from 'express';
import { userpostslike } from '../controller/userPostsImgController';

const router = express.Router();

router.get('/userpostslike', userpostslike);

export default router;
