import { Request, Response } from 'express';
import userModel from '../../shared/db/userModel';

// 전체 사용자 아이디 목록 가져오기
export const getAllUserIds = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find({}, 'id');
    const userIds = users.map((user) => user.id);
    res.status(200).json(userIds);
  } catch (error) {
    console.error('Error in getAllUserIds:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
