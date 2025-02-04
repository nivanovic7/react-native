import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ProfileScreen from "../screens/ProfileScreen";

function FeedHeader() {
  const { user, userProfileImg } = useSelector((state) => state.auth);

  return (
    <View style={styles.header}>
      <Link screen={ProfileScreen}>
        <Image
          source={{ uri: userProfileImg.imageSmallSource }}
          style={styles.profileImage}
        />
      </Link>
      <Text style={styles.userName}>{user.userName}</Text>
      <FontAwesome name="envelope-o" size={20} color="black" />
    </View>
  );
}

export default FeedHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
