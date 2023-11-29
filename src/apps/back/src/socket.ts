import { Server, Socket } from 'socket.io';
import { createServer } from 'node:http';
import type { Express } from 'express';
import { SOCKET_EVENT } from '../../../packages/models/socket';

export const SOCKET_PORT = 5545;

const { connection, disconnect, ping, received, open, hello } = SOCKET_EVENT;

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
      // room.users.forEach((userSocket, index) => {
      //   // console.log('Fire', userSocket.id);
      //   if (room.users.length < 2) return;
      //   userSocket.emit(hello, {
      //     // message: `User ${room.users[(index + 1) % 2].id}is connected!`,
      //     sender: userSocket.id,
      //     // XXX: 더 풍부하게 메시지를 꾸밀꺼라면 이렇게 데이터 넘기면 돼요
      //     // {
      //     //   socketId: userSocket.id,
      //     //   profileImage: '',
      //     //   nickname: '',
      //     // }
      //   });
      // });
    });

    socket.on('clear', () => {
      roomList.splice(0, roomList.length);
    });

    // NOTE: 해당 룸의 소켓 두개한테 emit
    socket.on(received, (data) => {
      const room = roomList.find((room) => room.roomId === data.roomId);
      if (!room) {
        console.log('room 없음', data.roomId);
        return;
      }
      room.users.forEach((userSocket) => {
        console.log('Fire', userSocket.id);
        if (room.users.length < 2) {
          console.log('아직 상대방이 들어오지 않음');
          return;
        }
        userSocket.emit(hello, {
          message: data.message,
          sender: data.sender,
        });
      });
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
