import axios from "axios";
import { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/authSlice";

const API_URL = "https://laterz.api.exebyte.io/api/outfits";

export default function HomeScreen() {
  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPosts() {
      axios
        .get(API_URL, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((res) => console.log(res.data.data));
    }
    fetchPosts();
  }, []);

  function handleLogout() {
    dispatch(logOut());
  }
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={handleLogout} title="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
