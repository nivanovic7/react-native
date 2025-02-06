import { Image, Text, View } from "react-native";

function GroupChatHeader({ members }) {
  return (
    <View>
      <Text>{members.map((member) => member.userName).join(", ")}</Text>
    </View>
  );
}

export default GroupChatHeader;
