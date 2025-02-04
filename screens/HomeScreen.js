import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Image,
} from "react-native";

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
          backgroundColor: "#201f2f",
          margin: 10,
          borderRadius: 24,
          height: 70,
          alignContent: "center",
          justifyContent: "center",
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          borderWidth: 3,
        },
        tabBarIconStyle: {
          alignSelf: "center",
          justifySelf: "center",
        },

        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Feed") {
            return (
              <Ionicons name="home-outline" size={24} color="whitesmoke" />
            );
          } else if (route.name === "Notifications") {
            return (
              <MaterialIcons
                name="notifications-none"
                size={24}
                color="whitesmoke"
                style={{ alignContent: "center", justifyContent: "center" }}
              />
            );
          } else if (route.name === "Search") {
            return <Octicons name="search" size={24} color="whitesmoke" />;
          } else if (route.name === "Reels") {
            return (
              <MaterialCommunityIcons
                name="television-play"
                size={24}
                color="whitesmoke"
              />
            );
          } else if (route.name === "NewPost") {
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
    borderRadius: 100, // Circular container
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    alignSelf: "center",
  },
});
