import express from 'express';
import { postsImg } from '../controller/userPostsImgController';

const router = express.Router();

router.get('/postsImg', postsImg);

export default router;
