import { Pressable, Text } from "react-native";

function ChatButton({ text }) {
  return (
    <Pressable
      style={{
        width: 80,
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </Pressable>
  );
}

export default ChatButton;
