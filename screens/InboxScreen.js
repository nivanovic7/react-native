import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useGetChatsQuery } from "../redux/chatApi";
import { Link } from "@react-navigation/native";
import ChatScreen from "./ChatScreen";
import ChatAvatar from "../components/ChatAvatar";
import ChatMembers from "../components/ChatMembers";
import ChatButton from "../components/ChatButton";
import SeparatorLine from "../components/SeparatorLine";
import ChatItem from "../components/ChatItem";
const { width } = Dimensions.get("screen");

function InboxScreen() {
  const { data, isLoading } = useGetChatsQuery();

  if (isLoading) {
    return <ActivityIndicator size="small" />;
  }

  return (
    <View>
      <FlatList
        data={data.data.filter((chat) => chat.chatMembers.length > 1)}
        ItemSeparatorComponent={() => <SeparatorLine />}
        renderItem={({ item }) => <ChatItem item={item} />}
      />
    </View>
  );
}

export default InboxScreen;
