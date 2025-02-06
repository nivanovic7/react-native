import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import { useGetChatsQuery } from "../redux/chatApi";
import SeparatorLine from "../components/SeparatorLine";
import ChatItem from "../components/ChatItem";

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
