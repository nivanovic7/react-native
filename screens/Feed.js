import { Link } from "@react-navigation/native";
import { Text, View } from "react-native";

function Feed() {
  return (
    <View>
      <Text>Main Feed</Text>
      <Link screen="Inbox">Go to Inbox</Link>
      <Link screen="Profile">Profile</Link>
    </View>
  );
}

export default Feed;
