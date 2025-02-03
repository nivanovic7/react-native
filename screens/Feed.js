import { Link } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/authSlice";

function Feed() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logOut());
  }
  return (
    <View>
      <Link screen="Inbox">Go to Inbox</Link>
      <Link screen="Profile">Profile</Link>
      <Button onPress={handleLogout} title="Logout" />
    </View>
  );
}

export default Feed;
