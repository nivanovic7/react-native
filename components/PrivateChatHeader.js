import { Image, StyleSheet, Text, View } from "react-native";

function PrivateChatHeader({ members }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: members[0].userProfileImage
            ? members[0].userProfileImage.imageSmallSource
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        }}
      />
      <Text>{members[0].name}</Text>
    </View>
  );
}

export default PrivateChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
