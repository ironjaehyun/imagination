import express from 'express';
import { getAllUserIds } from '../controller/chatController';

const router = express.Router();

// 전체 사용자 아이디 목록 가져오기
router.get('/', getAllUserIds);

export default router;
