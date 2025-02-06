import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("screen");

function ChatMembers({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {item.chatMembers
          .filter((member) => member._id !== item.user._id)
          .map((member) => member.name)
          .join(", ")}
      </Text>
    </View>
  );
}

export default ChatMembers;

const styles = StyleSheet.create({
  container: { width: width - 20 },
  text: {
    fontWeight: "bold",
  },
});
