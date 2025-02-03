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
import { useGetOutfitsQuery } from "../redux/outfitsApi";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { data: outfits, isLoading } = useGetOutfitsQuery();

  function handleLogout() {
    dispatch(logOut());
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={handleLogout} title="Logout" />

      {isLoading && <ActivityIndicator size="large" />}
      {outfits?.data && (
        <FlatList
          data={outfits.data}
          renderItem={({ item }) => (
            <>
              <Text style={styles.item}>{item.outfitDescription}</Text>
              <Image
                style={{ flex: 1, width: 100, height: 100 }}
                source={{
                  uri: `${item.outfitImages[0].imageMediumSource}` || "fal",
                }}
              />
            </>
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
