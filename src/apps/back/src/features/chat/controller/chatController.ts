// controllers/chatController.ts

import { Request, Response } from 'express';
import express from 'express';
import userModel from '../../shared/db/userModel';
import chatModels from '../../shared/db/chatRoomModel';
// const chatModels = require('../../shared/db/chatRoomModel');

const createChat = async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await chatModels.findOne({
      members: { $all: [firstId, secondId] },
    });

    if (chat) return res.status(200).json(chat);

    const newChat = new chatModels({
      members: [firstId, secondId],
    });

    const response = await newChat.save();

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findUserChats = async (req, res) => {
  const userId = req.params.userId;

  try {
    const chats = await chatModels.find({
      members: { $in: [userId] },
    });

    res.status(200).json(chats);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findChat = async (req, res) => {
  const { firstId, secondId } = req.params;

  try {
    const chat = await chatModels.find({
      members: { $all: [firstId, secondId] },
    });

    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export { createChat, findUserChats, findChat };

export const getChatRooms = async (req: Request, res: Response) => {
  try {
    const chatRooms = await userModel.find({}, 'id');
    const chatRoomIds = chatRooms.map((room) => room.id);
    res.status(200).json(chatRoomIds);
  } catch (error) {
    console.error('Error in getChatRooms:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const inviteToChat = (req: express.Request, res: express.Response) => {
  try {
    const { selectedUserName } = req.body;

    // 여기에서는 단순히 콘솔에 출력하도록 하겠습니다.
    console.log(`초대가 되었다 ${selectedUserName}`);

    // 나중에 채팅방 생성 및 초대 로직을 추가하세요.
    res.status(200).json({ message: 'Invitation sent successfully!' });
  } catch (error) {
    console.error('Error sending invitation:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createChatRoom = async (req: Request, res: Response) => {
  // 해당 컨트롤러에서 새로운 채팅방을 생성하는 로직을 추가하면 됩니다.
  res.status(201).json({ message: 'Create chat room endpoint' });
};

export const deleteChatRoom = async (req: Request, res: Response) => {
  // 해당 컨트롤러에서 채팅방을 삭제하는 로직을 추가하면 됩니다.
  res.status(200).json({ message: 'Delete chat room endpoint' });
};
