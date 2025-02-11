import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { useGetMessagesQuery } from "../redux/chatApi";
import SingelMessage from "../components/SingelMessage";
import { useEffect, useRef, useState } from "react";
import ChatScreenHeader from "../components/ChatScreenHeader";
import SendMessage from "../components/SendMessage";
import NewMessages from "../components/NewMessages";

function ChatScreen({ route }) {
  const navigation = useNavigation();
  const [newMessages, setNewMessages] = useState([]);
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
          {newMessages && (
            <NewMessages
              setNewMessages={setNewMessages}
              newMessages={newMessages}
              chatId={chat._id}
            />
          )}
        </ScrollView>
        <SendMessage setNewMessages={setNewMessages} chatId={chat._id} />
      </View>
    );
  }
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    flex: 1,
  },
  messageContainer: {},
  messageText: {
    fontSize: 16,
  },
});
