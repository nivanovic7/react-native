import { Link } from "@react-navigation/native";
import { Button, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/authSlice";
import FeedHeader from "../components/FeedHeader";

function FeedScreen() {
  const dispatch = useDispatch();

  return (
    <View>
      <FeedHeader />
      <Button onPress={() => dispatch(logOut())} title="LOGOUT" />
      <Link screen="InboxScreen">Go to Inbox</Link>
    </View>
  );
}

export default FeedScreen;
