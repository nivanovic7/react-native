export default function isTokenExpired(token) {
  const decoded = JSON.parse(atob(token.split(".")[1]));
  return decoded.exp * 1000 < Date.now();
}
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { StyleSheet, Text, View } from "react-native";

export function getTabIcons(route) {
  const iconMapping = {
    FeedScreen: <Ionicons name="home-outline" size={24} color="whitesmoke" />,
    NotificationsScreen: (
      <MaterialIcons name="notifications-none" size={24} color="whitesmoke" />
    ),
    SearchScreen: <Octicons name="search" size={24} color="whitesmoke" />,
    ReelsScreen: (
      <MaterialCommunityIcons
        name="television-play"
        size={24}
        color="whitesmoke"
      />
    ),
    NewPostScreen: (
      <View style={styles.addButton}>
        <Text style={{ color: "white" }}>+</Text>
      </View>
    ),
  };

  return iconMapping[route.name] || null;
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    alignSelf: "center",
    backgroundColor: "red",
  },
});
