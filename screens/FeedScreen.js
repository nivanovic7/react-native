import { StyleSheet, View } from "react-native";
import FeedHeader from "../components/FeedHeader";
import Outfits from "../components/Outfits";

function FeedScreen() {
  return (
    <View style={styles.container}>
      <FeedHeader />
      <Outfits />
    </View>
  );
}

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
