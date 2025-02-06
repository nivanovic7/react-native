import { Link } from "@react-navigation/native";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import ChatAvatar from "./ChatAvatar";
import ChatMembers from "./ChatMembers";
import ChatButton from "./ChatButton";
import ChatScreen from "../screens/ChatScreen";

const { width } = Dimensions.get("screen");

function ChatItem({ item }) {
  return (
    <Link key={(item) => item._id} screen={ChatScreen} style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          gap: 12,
        }}
        style={styles.scrollContainer}
        horizontal
        pagingEnabled
        snapToOffsets={[width, width + 200]}
        showsHorizontalScrollIndicator={false}
      >
        <ChatAvatar item={item} />
        <ChatMembers item={item} />
        <View style={styles.row}>
          <ChatButton text="Mute" />
          <ChatButton text="Delete" />
        </View>
      </ScrollView>
    </Link>
  );
}

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    paddingVertical: 23,
  },
  row: { flexDirection: "row" },
});
