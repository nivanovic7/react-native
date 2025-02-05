import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("screen");
function ImageSliderItem({ item, index }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imageMediumSource }} style={styles.image} />
    </View>
  );
}

export default ImageSliderItem;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  image: {
    width: width,
    height: width * 1.5,
    resizeMode: "cover",
  },
});
