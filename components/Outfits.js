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

function Outfits() {
  const { data, isLoading, error } = useGetOutfitsQuery();
  console.log(data);
  if (error) return <Text>Error ocured, try again later!</Text>;

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
