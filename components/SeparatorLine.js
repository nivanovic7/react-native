import { StyleSheet, View } from "react-native";

function SeparatorLine() {
  return <View style={styles.line}></View>;
}

export default SeparatorLine;

const styles = StyleSheet.create({
  line: {
    width: "90%",
    height: 1,
    backgroundColor: "lightgray",
    alignSelf: "center",
  },
});
