import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

function ChatScreen({ route }) {
  const { id } = route.params;
  return (
    <View>
      <Text>Chat id: {id}</Text>
    </View>
  );
}

export default ChatScreen;
