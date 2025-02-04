import { StyleSheet, Text, View } from "react-native";
import UserSnippet from "./UserSnippet";

function Outfit({ outfit }) {
  return (
    <View style={styles.container}>
      <UserSnippet user={outfit.user[0]} />
    </View>
  );
}

export default Outfit;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
