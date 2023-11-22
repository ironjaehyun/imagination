import express from 'express';

import {
  getChatRooms,
  createChatRoom,
  deleteChatRoom,
  inviteToChat,
  getUser,
} from '../controller/chatController';

const router = express.Router();

// 채팅 목록 가져오기
router.get('/list', getChatRooms);

router.get('/user', getUser);

router.post('/invite', inviteToChat);

// 채팅방 생성
router.post('/create', createChatRoom);

// 채팅방 삭제
router.delete('/:roomId', deleteChatRoom);

export default router;
