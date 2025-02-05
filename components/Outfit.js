import { Image, StyleSheet, Text, View } from "react-native";
import UserSnippet from "./UserSnippet";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ImageSlider from "./ImageSlider";
import Adaptive from "../assets/adaptive-icon.png";

function Outfit({ outfit }) {
  const data = [
    { imageMediumSource: require("../assets/1.png") },
    { imageMediumSource: require("../assets/2.png") },
    { imageMediumSource: require("../assets/3.png") },
    { imageMediumSource: require("../assets/4.png") },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserSnippet user={outfit.user[0]} />
        <Entypo name="dots-three-horizontal" size={18} color="black" />
      </View>
      <ImageSlider data={data} />
      <View style={styles.interactionButtons}>
        <FontAwesome5 name="comment" size={24} color="black" />
        <AntDesign
          style={{ marginRight: "auto" }}
          name="hearto"
          size={24}
          color="black"
        />
        <MaterialCommunityIcons name="share" size={24} color="black" />
      </View>
      <Text style={styles.desc}>{outfit.outfitDescription}</Text>
    </View>
  );
}

export default Outfit;

const styles = StyleSheet.create({
  container: {},
  header: {
    gap: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  interactionButtons: {
    flexDirection: "row",
    paddingHorizontal: 12,
    gap: 8,
  },
  desc: {
    paddingHorizontal: 12,
  },
});
