import { Server, Socket } from 'socket.io';
import { createServer } from 'node:http';
import type { Express } from 'express';
import { SOCKET_EVENT } from '../../../packages/models/socket';

export const SOCKET_PORT = 5545;

const { connection, disconnect, ping, send, received, open, hello } =
  SOCKET_EVENT;

type Room = {
  roomId: string;
  users: Socket[];
};
const roomList: Room[] = [];

const initSocket = (app: Express) => {
  const server = createServer(app);
  const io = new Server(server);

  io.on(connection, (socket) => {
    socket.emit(ping);

    socket.on(open, ({ roomId }) => {
      const existRoom = roomList.find((room) => room.roomId === roomId);
      const room = (() => {
        if (!existRoom) return { roomId, users: [socket] };
        const users = existRoom.users.concat(socket); // 새로운 배열이 리턴
        const existRoomIndex = roomList.findIndex(
          (room) => room.roomId === roomId,
        );
        roomList.splice(existRoomIndex, 1);
        return { roomId, users };
      })();
      roomList.push(room);
      room.users.forEach((userSocket) => {
        console.log('Fire', userSocket.id);
        userSocket.emit(hello, {
          message: `User ${userSocket.id}is connected!`,
        });
      });
    });

    socket.on(received, (data) => {
      // TODO : 해당 룸의 소켓 두개한테 emit

      io.emit(send, { user: data.user, message: data.message });
    });

    socket.on(disconnect, () => {
      console.log('User disconnected');
    });
  });

  server.listen(SOCKET_PORT, () => {
    console.info(`Socket server is running... ${SOCKET_PORT}`);
  });
};

export default initSocket;
