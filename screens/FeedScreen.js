import { Link } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/authSlice";

function FeedScreen() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logOut());
  }
  return (
    <View>
      <View></View>
      <Link screen="InboxScreen">Go to Inbox</Link>
      <Link screen="ProfileScreen">Profile</Link>
      <Button onPress={handleLogout} title="Logout" />
    </View>
  );
}

export default FeedScreen;
