import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useGetMessagesQuery } from "../redux/chatApi";
import SingelMessage from "../components/SingelMessage";
import { useEffect } from "react";
import ChatScreenHeader from "../components/ChatScreenHeader";

function ChatScreen({ route }) {
  const navigation = useNavigation();
  const { item: chat } = route.params;
  const { data, isLoading } = useGetMessagesQuery(chat._id);

  useEffect(() => {
    navigation.setOptions({
      header: () => <ChatScreenHeader chat={chat} />,
    });
  }, [navigation, data]);

  if (isLoading) return <ActivityIndicator size="small" />;

  if (data) {
    return (
      <View style={styles.container}>
        {data.data
          .filter((msg) => msg.chatMessageText != null)
          .map((msg) => (
            <SingelMessage key={msg._id} msg={msg} />
          ))}
      </View>
    );
  }
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: { gap: 12, padding: 12 },
  messageText: {
    fontSize: 16,
  },
});
