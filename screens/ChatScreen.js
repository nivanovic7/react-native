import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { useGetMessagesQuery } from "../redux/chatApi";
import SingelMessage from "../components/SingelMessage";
import { useEffect, useRef } from "react";
import ChatScreenHeader from "../components/ChatScreenHeader";
import SendMessage from "../components/SendMessage";

function ChatScreen({ route }) {
  const navigation = useNavigation();
  const { item: chat } = route.params;
  const { data, isLoading } = useGetMessagesQuery(chat._id);
  const messageBoxRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      header: () => <ChatScreenHeader chat={chat} />,
    });
  }, [navigation, data]);

  if (isLoading) return <ActivityIndicator size="small" />;

  if (data) {
    return (
      <View style={styles.container}>
        <ScrollView
          onContentSizeChange={() =>
            messageBoxRef.current?.scrollToEnd({ animated: true })
          }
          ref={messageBoxRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 12,
            flexGrow: 1,
            paddingBottom: 75,
          }}
        >
          {data.data
            .filter((msg) => msg.chatMessageText != null)
            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            .map((msg) => {
              return <SingelMessage key={msg._id} msg={msg} />;
            })}
          <View></View>
        </ScrollView>
        <SendMessage chatId={chat._id} />
      </View>
    );
  }
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    flex: 1,
    paddingHorizontal: 8,
  },
  messageContainer: {},
  messageText: {
    fontSize: 16,
  },
});
