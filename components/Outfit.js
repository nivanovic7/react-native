import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import UserSnippet from "./UserSnippet";
import Entypo from "@expo/vector-icons/Entypo";
import Carousel from "react-native-reanimated-carousel";
import { useCallback, useState } from "react";

function Outfit({ outfit }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserSnippet user={outfit.user[0]} />
        <Entypo name="dots-three-horizontal" size={18} color="black" />
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        ></View>
      </View>

      <Text>Some text</Text>
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
});
