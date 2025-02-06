import { Image, StyleSheet } from "react-native";

function ChatAvatar({ item }) {
  return (
    item.chatMembers.length === 2 &&
    item.chatMembers
      .filter((member) => member._id !== item.user._id)
      .map((member) => (
        <Image
          style={styles.avatar}
          source={{
            uri: member.userProfileImage
              ? member.userProfileImage.imageSmallSource
              : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
          }}
        />
      ))
  );
}

export default ChatAvatar;

const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
