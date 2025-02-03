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

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/authSlice";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useGetOutfitsQuery } from "../redux/outfitsApi";
import Feed from "./Feed";
import Notifications from "./Notifications";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { data: outfits, isLoading } = useGetOutfitsQuery();

  function handleLogout() {
    dispatch(logOut());
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "gray", // Custom background color
          borderTopWidth: 0, // Remove border
          paddingBottom: 10, // Padding at the bottom
          margin: 16,
          borderRadius: 24,
          color: "white",
        },
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
    // <View style={styles.container}>
    //   <Text>Home Screen</Text>
    //   <Button onPress={handleLogout} title="Logout" />

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
