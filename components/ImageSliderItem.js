import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("screen");
function ImageSliderItem({ item, index }) {
  console.log(item);
  console.log(width);
  return (
    <View style={styles.container}>
      <Image
        source={item.imageMediumSource}
        style={{ width: 300, height: 500 }}
      />
    </View>
  );
}

export default ImageSliderItem;

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
});
