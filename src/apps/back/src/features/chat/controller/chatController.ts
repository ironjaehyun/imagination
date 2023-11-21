import { Request, Response } from 'express';
import express from 'express';
import userModel from '../../shared/db/userModel';

export const getChatRooms = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find({}, '_id id user_profile_img');
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error('Error in getChatRooms:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const inviteToChat = (req: express.Request, res: express.Response) => {
  try {
    const { selectedUserName } = req.body;

    console.log(`Invitation sent to ${selectedUserName}`);

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
