import roomModels from '../../shared/db/chatRoomModel';
import userModel from '../../shared/db/userModel';
import mongoose from 'mongoose';

export const createRoom = async (req) => {
  console.log(req.body);
  const { user, me, string } = req.body;

  const userId = new mongoose.Types.ObjectId(user);
  const meId = new mongoose.Types.ObjectId(me);
  const room = new roomModels({
    room: string,
    members: [userId, meId],
  });

  await room.save();
};
