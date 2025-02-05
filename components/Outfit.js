import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import UserSnippet from "./UserSnippet";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ImageSlider from "./ImageSlider";
import { useSelector } from "react-redux";

function Outfit({ outfit }) {
  const { imageSmallSource } = useSelector(
    (state) => state.auth.userProfileImg
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserSnippet user={outfit.user[0]} />
        <Entypo name="dots-three-horizontal" size={18} color="black" />
      </View>
      <ImageSlider data={outfit.outfitImages} />
      <View style={styles.interactionButtons}>
        <View style={styles.row}>
          <AntDesign name="hearto" size={24} color="black" />
          <Text>{outfit.likes}</Text>
        </View>
        <View style={[styles.row, { marginRight: "auto" }]}>
          <FontAwesome5 name="comment" size={24} color="black" />
          <Text>{outfit.outfitPostComment.length}</Text>
        </View>

        <MaterialCommunityIcons name="share" size={24} color="black" />
      </View>
      <Text style={styles.desc}>{outfit.outfitDescription}</Text>
      <View style={styles.commentContainer}>
        <Image
          source={{ uri: imageSmallSource }}
          style={{ width: 35, height: 35, borderRadius: 50 }}
        />
        <TextInput placeholder="Add comment..." />
      </View>
      <Text style={styles.created}>{outfit.created}</Text>
    </View>
  );
}

export default Outfit;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
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
    gap: 12,
  },
  desc: {
    paddingHorizontal: 12,
    fontSize: 16,
  },
  commentContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 12,
  },
  created: {
    fontSize: 12,
    color: "gray",
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
