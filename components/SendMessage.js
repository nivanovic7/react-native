import { Pressable, StyleSheet, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { useSendMessageMutation } from "../redux/chatApi";
import { useSelector } from "react-redux";

function SendMessage({ chatId, setNewMessages }) {
  const [message, setMessage] = useState("");
  const [sendMessage] = useSendMessageMutation();
  const currentUserId = useSelector((state) => state.auth.user.sub);

  async function handleMessage() {
    if (!message) return;
    setNewMessages((state) => [
      ...state,
      {
        payload: {
          _id: new Date().getTime(),
          chatMessageText: message,
          chatMessageUser: { _id: currentUserId },
        },
      },
    ]);
    setMessage("");
    await sendMessage({ message, chatId });
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={message}
        onChangeText={setMessage}
        style={styles.input}
        placeholder="Send message..."
      />
      <Pressable onPress={handleMessage}>
        <FontAwesome name="send" size={24} color="black" />
      </Pressable>
    </View>
  );
}

export default SendMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    padding: 8,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 8,
  },
});
