export enum SOCKET_EVENT {
  connection = 'connection',
  disconnect = 'disconnect',
  ping = 'ping',
  pong = 'pong',
  send = 'send', // FRONt send message
  open = 'open', // ROOM open
  hello = 'hello', // FRONT received message
  received = 'received',
  serverSend = 'serverSend',
  serverReceived = 'serverReceived',
}
