import { Image, StyleSheet, Text, View } from "react-native";

function UserSnippet({ user }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: user.avatar.imageSmallSource }}
      />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.handle}>@placeholder</Text>
      </View>
    </View>
  );
}

export default UserSnippet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  handle: {
    color: "gray",
  },
});
