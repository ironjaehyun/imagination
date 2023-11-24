import { Server } from 'socket.io';
import { createServer } from 'node:http';
import type { Express } from 'express';

export const SOCKET_PORT = 5545;

const initSocket = (app: Express) => {
  const server = createServer(app);
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('User connected');
    socket.emit('ping');

    socket.on('chat message', (data) => {
      io.emit('chat message', { user: data.user, message: data.message });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  server.listen(SOCKET_PORT, () => {
    console.info(`Socket server is running... ${SOCKET_PORT}`);
  });
};

export default initSocket;
