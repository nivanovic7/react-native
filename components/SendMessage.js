import { Pressable, StyleSheet, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";

function SendMessage() {
  const [message, setMessage] = useState("");

  function handleMessage() {
    if (!message) return;
    alert(message);
    setMessage("");
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
