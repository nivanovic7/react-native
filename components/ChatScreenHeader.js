import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import PrivateChatHeader from "./PrivateChatHeader";
import GroupChatHeader from "./GroupChatHeader";
import BackButton from "./BackButton";
import { getMembersWithoutCurrentUser } from "../utils/helpers";

function ChatScreenHeader({ chat }) {
  const currentUserId = useSelector((state) => state.auth.user.sub);
  const members = getMembersWithoutCurrentUser(chat, currentUserId);

  return (
    <View style={styles.container}>
      <BackButton />
      {members.length === 1 ? (
        <PrivateChatHeader members={members} />
      ) : (
        <GroupChatHeader members={members} />
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
    gap: 16,
  },
});
