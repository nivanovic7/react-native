import { useRoute } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useGetMessagesQuery } from "../redux/chatApi";

function ChatScreen({ route }) {
  const { id } = route.params;
  const { data, isLoading } = useGetMessagesQuery(id);
  if (data) console.log(data);

  if (isLoading) return <ActivityIndicator size="small" />;

  if (data) {
    return (
      <View>
        {data.data.map((msg) => (
          <Text key={msg._id}>
            <Text style={styles.userName}> {msg.chatMessageUser.userName}</Text>
            : {msg.chatMessageText}
          </Text>
        ))}
      </View>
    );
  }
}

export default ChatScreen;

const styles = StyleSheet.create({
  userName: {
    fontWeight: 600,
  },
});
