import express from 'express';

import {
  getChatRooms,
  deleteChatRoom,
  inviteToChat,
  getUser,
  createRoom,
} from '../controller/chatController';

const router = express.Router();

// 채팅 목록 가져오기
router.get('/list', getChatRooms);

router.get('/user', getUser);

router.post('/invite', inviteToChat);

router.post('/room', createRoom);

// 채팅방 삭제
router.delete('/:roomId', deleteChatRoom);

export default router;
