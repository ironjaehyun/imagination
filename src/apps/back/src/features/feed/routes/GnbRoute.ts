import express from 'express';
import { findPostsFollow } from '../controller/findPostsFollow';

const router = express.Router();

router.get('/findPostsFollow/:userId', findPostsFollow);

export default router;
