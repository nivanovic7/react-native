import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function SingelMessage({ msg }) {
  const { sub: userId } = useSelector((state) => state.auth.user);

  return (
    <View
      key={msg._id}
      style={[
        msg.chatMessageUser._id === userId
          ? styles.userMessage
          : styles.friendMessage,
        styles.message,
      ]}
    >
      <Text style={styles.messageText}>{msg.chatMessageText}</Text>
      <Text style={styles.messageTime}>{msg.messageTime}</Text>
    </View>
  );
}

export default SingelMessage;

const styles = StyleSheet.create({
  container: { gap: 12, padding: 12 },
  messageText: {
    fontSize: 16,
  },
  message: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: "row",
    gap: 20,
    elevation: 5,
    marginHorizontal: 12,
  },
  userMessage: {
    backgroundColor: "darkorange",
    color: "whitesmoke",
    alignSelf: "flex-end",
  },
  friendMessage: {
    backgroundColor: "lightgray",
    color: "black",
    alignSelf: "flex-start",
  },
  messageTime: {
    fontSize: 10,
    alignSelf: "flex-end",
    opacity: 0.3,
  },
});
