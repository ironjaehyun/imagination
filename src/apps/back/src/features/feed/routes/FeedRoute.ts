import express from 'express';
import { userpostslike } from '../controller/userPostsImgController';
import { likes } from '../controller/likesCnt';

const router = express.Router();

router.get('/userpostslike', userpostslike);
router.post('/likes', likes);

export default router;
