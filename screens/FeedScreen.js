import { Link } from "@react-navigation/native";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/authSlice";

import FontAwesome from "@expo/vector-icons/FontAwesome";

function FeedScreen() {
  const dispatch = useDispatch();
  const { user, userProfileImg } = useSelector((state) => state.auth);
  console.log(userProfileImg);
  return (
    <View>
      <View style={styles.header}>
        <Image
          source={{ uri: userProfileImg.imageSmallSource }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{user.userName}</Text>
        <FontAwesome name="envelope-o" size={20} color="black" />
      </View>
      <Button onPress={() => dispatch(logOut())} title="LOGOUT" />

      <Link screen="InboxScreen">Go to Inbox</Link>
      <Link screen="ProfileScreen">Profile</Link>
    </View>
  );
}

export default FeedScreen;

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
