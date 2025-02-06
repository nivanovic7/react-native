import { Dimensions, Text, View } from "react-native";

const { width } = Dimensions.get("screen");

function ChatMembers({ item }) {
  return (
    <View style={{ width: width - 20 }}>
      <Text>
        {console.log(item)}
        {item.chatMembers
          .filter((member) => member._id !== item.user._id)
          .map((member) => member.name)
          .join(", ")}
      </Text>
    </View>
  );
}

export default ChatMembers;
