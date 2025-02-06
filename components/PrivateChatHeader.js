import { Image, Text, View } from "react-native";

function PrivateChatHeader({ members }) {
  return (
    <View>
      <Image
        source={{ uri: members[0].userProfileImage.imageSmallSource }}
        width={30}
        height={30}
      />
      <Text>{members[0].name}</Text>
    </View>
  );
}

export default PrivateChatHeader;
