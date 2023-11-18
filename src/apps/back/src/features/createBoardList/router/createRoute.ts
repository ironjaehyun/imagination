import express from 'express';
import {
  savedImage,
  getSavedImage,
  createPost,
} from '../controller/createController';

const router = express.Router();

router.post('/savedimg', savedImage);
router.get('/getsavedimg', getSavedImage);
router.post('/post', createPost);
export default router;
