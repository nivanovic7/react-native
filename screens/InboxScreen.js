import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useGetChatsQuery } from "../redux/chatApi";
import { useState } from "react";
const { width } = Dimensions.get("screen");

function InboxScreen() {
  const { data, isLoading } = useGetChatsQuery();

  if (isLoading) {
    return <ActivityIndicator size="small" />;
  }

  return (
    <View>
      <FlatList
        data={data.data}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <ScrollView
                horizontal
                pagingEnabled
                snapToOffsets={[width, width + 200]}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ width: width - 20 }}>
                  <Text>
                    {item.chatMembers.map((member) => member.name).join(", ")}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={{
                      width: (width - 20) / 2,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>Delete</Text>
                  </Pressable>
                  <Pressable
                    style={{
                      justifyContent: "center",
                      width: (width - 20) / 2,
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>Mute</Text>
                  </Pressable>
                </View>
              </ScrollView>
            </View>
          );
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "90%",
              height: 1,
              backgroundColor: "lightgray",
              alignSelf: "center",
            }}
          ></View>
        )}
      />
    </View>
  );
}

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    paddingVertical: 23,
  },
});
