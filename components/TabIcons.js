import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { StyleSheet, Text, View } from "react-native";

export default function TabIcons(route) {
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
