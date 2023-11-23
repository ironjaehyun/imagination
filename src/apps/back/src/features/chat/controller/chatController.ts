import { Request, Response } from 'express';
import express from 'express';
import userModel from '../../shared/db/userModel';
import roomModels from '../../shared/db/chatRoomModel';

// 채팅 초대모달 아이디 이미지
export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find({}, `_id id user_profile_img`);
    res.status(200).json(users);
  } catch (error) {
    console.error('Error in getChatRooms:', error);
    res.status(500).json({ message: `Internal Server Error` });
  }
};

//
export const getChatRooms = async (req, res) => {
  try {
    const rooms = await roomModels.find({ members: req.query.id }).populate({
      path: 'members',
      select: '_id id user_profile_img',
      model: 'User',
    });

    res.status(200).json(rooms);
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

export const deleteChatRoom = async (req: Request, res: Response) => {
  // 해당 컨트롤러에서 채팅방을 삭제하는 로직을 추가하면 됩니다.
  res.status(200).json({ message: 'Delete chat room endpoint' });
};
