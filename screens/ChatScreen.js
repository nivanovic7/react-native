import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useGetMessagesQuery } from "../redux/chatApi";
import SingelMessage from "../components/SingelMessage";
import { useEffect, useState } from "react";
import ChatScreenHeader from "../components/ChatScreenHeader";

function ChatScreen({ route }) {
  const [title, setTitle] = useState("Chat Screen");
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      header: () => <ChatScreenHeader title={title} />,
    });
  }, [navigation, title]);

  const { id } = route.params;
  const { data, isLoading } = useGetMessagesQuery(id);

  if (isLoading) return <ActivityIndicator size="small" />;

  if (data) {
    return (
      <View style={styles.container}>
        {data.data
          .filter((msg) => msg.chatMessageText != null)
          .map((msg) => (
            <SingelMessage msg={msg} />
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
