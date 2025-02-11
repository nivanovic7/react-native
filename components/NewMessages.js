import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import useSocket from "../hooks/useSocket";
import { useSelector } from "react-redux";
import SingelMessage from "./SingelMessage";

function NewMessages({ setNewMessages, newMessages, chatId }) {
  const socket = useSocket(chatId);
  const currentUserId = useSelector((state) => state.auth.user.sub);

  useEffect(() => {
    if (socket) {
      socket.on("newChatMessage", (e) => {
        console.log(e);
        const friendId = e.payload.chatMessageUser._id;
        if (currentUserId !== friendId)
          setNewMessages((state) => [...state, e]);
      });

      return () => {
        socket.off("newChatMessage");
      };
    }
  }, [chatId, socket, currentUserId, setNewMessages]);
  console.log(newMessages);
  return (
    <View style={styles.container}>
      {newMessages &&
        newMessages.map((msg) => {
          console.log(msg);
          return <SingelMessage key={msg.payload._id} msg={msg.payload} />;
        })}
    </View>
  );
}

export default NewMessages;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    flex: 1,
  },
});
