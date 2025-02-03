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
import Fontisto from "@expo/vector-icons/Fontisto";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/authSlice";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useGetOutfitsQuery } from "../redux/outfitsApi";
import Feed from "./Feed";
import Notifications from "./Notifications";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "./Search";
import Reels from "./Reels";
import NewPost from "./NewPost";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { data: outfits, isLoading } = useGetOutfitsQuery();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: "gray", // Custom background color
          borderTopWidth: 0, // Remove border
          paddingBottom: 10, // Padding at the bottom
          margin: 16,
          borderRadius: 24,
          color: "white",
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Feed") {
            return <Ionicons name="home-outline" size={24} color="black" />;
          } else if (route.name === "Notifications") {
            return (
              <MaterialIcons
                name="notifications-none"
                size={24}
                color="yellow"
              />
            );
          } else if (route.name === "Search") {
            return <Fontisto name="search" size={24} color="black" />;
          } else if (route.name === "Reels") {
            return (
              <MaterialCommunityIcons
                name="television-play"
                size={24}
                color="black"
              />
            );
          } else if (route.name === "NewPost") {
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100, // Circular container
                  backgroundColor: focused ? "firebrick" : "red",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <Text style={{ color: "white" }}>+</Text>
              </View>
            );
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "blue",
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="NewPost" component={NewPost} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
    </Tab.Navigator>
    // <View style={styles.container}>
    //   <Text>Home Screen</Text>

    //   {isLoading && <ActivityIndicator size="large" />}
    //   {outfits?.data && (
    //     <FlatList
    //       data={outfits.data}
    //       renderItem={({ item }) => (
    //         <>
    //           <Text style={styles.item}>{item.outfitDescription}</Text>
    //           <Image
    //             style={{ flex: 1, width: 100, height: 100 }}
    //             source={{
    //               uri: `${item.outfitImages[0].imageMediumSource}` || "fal",
    //             }}
    //           />
    //         </>
    //       )}
    //       keyExtractor={(item) => item._id}
    //     />
    //   )}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
