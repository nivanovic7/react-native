import { StyleSheet, Text, View } from "react-native";

function ChatScreenHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

export default ChatScreenHeader;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    // backgroundColor: "orange",
    // elevation: 2,
  },
});
