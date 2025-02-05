import axios from "axios";
import { View, Text, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";

import { useDispatch, useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./FeedScreen";
import SearchScreen from "./SearchScreen";
import NewPostScreen from "./NewPostScreen";
import ReelsScreen from "./ReelsScreen";
import NotificationsScreen from "./NotificationsScreen";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          height: 66,
          margin: 15,
          backgroundColor: "#201f2f",
          // backgroundColor: "transparent",

          borderRadius: 24,
          elevation: 0, // Shadow on Android
          shadowColor: "#000", // Shadow color
          shadowOffset: { width: 0, height: 0 }, // Shadow offset
          shadowOpacity: 0, // Shadow opacity
          shadowRadius: 0,
        },
        tabBarItemStyle: {
          borderRadius: 8,
        },

        tabBarIconStyle: {
          position: "absolute",
          transform: "translateY(16px)",
        },

        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "FeedScreen") {
            return (
              <Ionicons name="home-outline" size={24} color="whitesmoke" />
            );
          } else if (route.name === "NotificationsScreen") {
            return (
              <MaterialIcons
                name="notifications-none"
                size={24}
                color="whitesmoke"
                style={{ alignContent: "center", justifyContent: "center" }}
              />
            );
          } else if (route.name === "SearchScreen") {
            return <Octicons name="search" size={24} color="whitesmoke" />;
          } else if (route.name === "ReelsScreen") {
            return (
              <MaterialCommunityIcons
                name="television-play"
                size={24}
                color="whitesmoke"
              />
            );
          } else if (route.name === "NewPostScreen") {
            return (
              <View style={styles.addButton}>
                <Text style={{ color: "white" }}>+</Text>
              </View>
            );
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "blue",
      })}
    >
      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="ReelsScreen" component={ReelsScreen} />
      <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Tab.Navigator>
  );
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
