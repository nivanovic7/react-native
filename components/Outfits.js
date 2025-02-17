import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useGetOutfitsQuery } from "../redux/outfitsApi";
import Outfit from "./Outfit";
import { useEffect, useState } from "react";

function Outfits() {
  const { data, isLoading, error } = useGetOutfitsQuery();
  // const [posts, setPosts] = useState(null);
  console.log(data);
  // if (error) {
  //   console.log(error);
  //   return <Text>Error ocured, try again later!</Text>;
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("https://laterz.api.exebyte.io/api/outfits", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzE3N2IyZTg3ZDE1ZmY3OTcxM2NiZDkiLCJ1c2VyRW1haWwiOiJ0ZXN0QHlhaG9vLmNvbSIsInVzZXJOYW1lIjoidGVzdFVzZXIiLCJ1c2VyRmlyc3ROYW1lIjoiIiwidXNlckxhc3ROYW1lIjoiIiwidXNlckFjY291bnRTdGF0dXMiOiJhY3RpdmUiLCJ1c2VyQWNjb3VudFR5cGUiOiJjbGllbnQiLCJ1c2VyUmVsYXRpb25zaGlwU3RhdHVzIjoic2luZ2xlIiwiaWF0IjoxNzM5Nzk1NTY4LCJleHAiOjE3NDI4MDQ1OTF9.B59cXwQxUxIVANLAPd-ugrhOglDYDWBEoDo6gO8_Zpc`, // Replace with actual token
  //         },
  //       });
  //       const data = await res.json(); // Parse JSON response
  //       setPosts(data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return isLoading ? (
    <ActivityIndicator size="small" />
  ) : (
    <FlatList
      contentContainerStyle={styles.container}
      data={data.data}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <Outfit outfit={item} />}
    />
  );
}

export default Outfits;

const styles = StyleSheet.create({
  container: {
    gap: 40,
    paddingBottom: 170,
  },
});
