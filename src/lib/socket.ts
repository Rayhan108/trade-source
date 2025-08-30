// /lib/socket.ts
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocket = (userId: string) => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_HOST_SOCKET_API as string, {
      query: { userId },
      transports: ['websocket'],
    });
  }
  return socket;
};
