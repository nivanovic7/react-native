import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const SOCKET_URL = "https://laterz.api.exebyte.io";
const useSocket = (chatId) => {
  const token = useSelector((state) => state.auth.accessToken);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const connectSocket = () => {
      if (!socket) {
        const newSocket = io(SOCKET_URL, {
          transports: ["websocket"],
          query: { jwt: token },
        });

        setSocket(newSocket);

        newSocket.on("connect", () => {});
        newSocket.on("disconnect", () => {
          connectSocket();
        });
      } else {
        socket.connect();
      }
    };

    connectSocket();

    return () => {
      if (socket) {
        if (socket.connected) {
          socket.disconnect();
        }
      }
    };
  }, [token, chatId, socket]);

  return socket;
};

export default useSocket;
