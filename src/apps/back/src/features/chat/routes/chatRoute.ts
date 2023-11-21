// import express from 'express';
// const express = require('express');
import express from 'express';

import {
  createChat,
  findUserChats,
  findChat,
} from '../controller/chatController';

// import {
//   getChatRooms,
//   createChatRoom,
//   deleteChatRoom,
//   inviteToChat,
// } from '../controller/chatController';

const router = express.Router();

// 채팅 목록 가져오기
// router.get('/', getChatRooms);

router.post('/', createChat);
router.get('/:userId', findUserChats);
router.get('/find/:firstId/:secondId', findChat);

module.exports = router;

// router.post('/invite', inviteToChat);

// // 채팅방 생성
// router.post('/create', createChatRoom);

// // 채팅방 삭제
// router.delete('/:roomId', deleteChatRoom);

export default router;
