import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import ChatAvatar from "./ChatAvatar";
import ChatMembers from "./ChatMembers";
import ChatButton from "./ChatButton";
import ChatScreen from "../screens/ChatScreen";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("screen");

function ChatItem({ item }) {
  const navigation = useNavigation();
  return (
    <Pressable
      key={item._id}
      onPress={() => navigation.navigate("ChatScreen", { item })}
      style={styles.container}
    >
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
        {item.chatMembers.length > 2 && (
          <Image
            style={styles.avatar}
            source={require("../assets/groupAvatar.png")}
          />
        )}
        <ChatAvatar item={item} />
        <ChatMembers item={item} />

        <View style={styles.row}>
          <ChatButton text="Mute" />
          <ChatButton text="Delete" />
        </View>
      </ScrollView>
    </Pressable>
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
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
