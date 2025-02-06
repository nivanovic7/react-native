import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import PrivateChatHeader from "./PrivateChatHeader";
import GroupChatHeader from "./GroupChatHeader";

function ChatScreenHeader({ chat }) {
  const navigation = useNavigation();
  const currentUser = useSelector((state) => state.auth.user.sub);
  const membersWithoutCurrentUser = chat.chatMembers.filter(
    (member) => member._id != currentUser
  );

  return (
    <View style={styles.container}>
      <Pressable title="Back" onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </Pressable>
      {membersWithoutCurrentUser.length === 1 ? (
        <PrivateChatHeader members={membersWithoutCurrentUser} />
      ) : (
        <GroupChatHeader members={membersWithoutCurrentUser} />
      )}
    </View>
  );
}

export default ChatScreenHeader;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
