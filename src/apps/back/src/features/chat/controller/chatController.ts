import { Request, Response } from 'express';
import express from 'express';
import userModel from '../../shared/db/userModel';
import roomModels from '../../shared/db/chatRoomModel';
import messageModel from '../../shared/db/messageModel';
import mongoose from 'mongoose';

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

//
export const createRoom = async (req, res) => {
  const { user, me, string } = req.body;

  const userId = new mongoose.Types.ObjectId(user);
  const meId = new mongoose.Types.ObjectId(me);
  const room = new roomModels({
    room: string,
    members: [userId, meId],
  });
  await room.save();

  const AUser = await userModel.findById(meId);
  const BUser = await userModel.findById(userId);

  AUser.room.push(room._id);
  BUser.room.push(room._id);

  await AUser.save();
  await BUser.save();

  res.status(200).json({ room: room._id, members: [AUser, BUser] });
};

export const saveMessage = async (req: Request, res: Response) => {
  try {
    const { chatId, senderId, text } = req.body;

    // chatId에 연결된 채팅방(Room)을 찾습니다.
    const room = await roomModels.findById(chatId);

    // 채팅방이 존재하는지 확인합니다.
    if (!room) {
      return res.status(404).json({ message: '채팅방을 찾을 수 없습니다.' });
    }

    // 새로운 메시지를 생성합니다.
    const message = new messageModel({
      chatId,
      senderId,
      text,
      room: room._id, // 메시지에 채팅방 ID를 설정합니다.
    });

    // 메시지를 저장합니다.
    await message.save();

    res.status(200).json({ message: '메시지가 성공적으로 저장되었습니다!' });
  } catch (error) {
    console.error('메시지 저장 중 오류 발생:', error);
    res.status(500).json({ message: '내부 서버 오류' });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const { chatId } = req.query;

    // 채팅 메시지 불러오기
    const messages = await messageModel.find({ chatId });

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
