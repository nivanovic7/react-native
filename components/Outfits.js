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
  const {
    data: { data },
    isLoading,
  } = useGetOutfitsQuery();

  if (data) data.map((item) => console.log(item));

  return isLoading ? (
    <ActivityIndicator size="small" />
  ) : (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <Outfit outfit={item} />}
    />
  );
}

export default Outfits;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
