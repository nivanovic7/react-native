import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useGetChatsQuery } from "../redux/chatApi";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const { width } = Dimensions.get("screen");

function InboxScreen() {
  const { data, isLoading } = useGetChatsQuery();

  if (isLoading) {
    return <ActivityIndicator size="small" />;
  }
  console.log(data);

  return (
    <View>
      <FlatList
        data={data.data.filter((chat) => chat.chatMembers.length > 1)}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <ScrollView
                contentContainerStyle={{
                  alignItems: "center",
                  gap: 12,
                }}
                style={styles.scrollContainer}
                horizontal
                pagingEnabled
                snapToOffsets={[width, width + 200]}
                showsHorizontalScrollIndicator={false}
              >
                {item.totalChatMembers > 2 && (
                  <MaterialIcons name="groups" size={24} color="black" />
                )}
                {item.chatMembers.length === 2 &&
                  item.chatMembers
                    .filter((member) => member._id !== item.user._id)
                    .map((member) =>
                      member.userProfileImage ? (
                        <Image
                          style={styles.avatar}
                          source={{
                            uri: member.userProfileImage.imageSmallSource,
                          }}
                        />
                      ) : (
                        <Image
                          style={styles.avatar}
                          source={{
                            uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
                          }}
                        />
                      )
                    )}

                <View style={{ width: width - 20 }}>
                  <Text>
                    {console.log(item)}
                    {item.chatMembers
                      .filter((member) => member._id !== item.user._id)
                      .map((member) => member.name)
                      .join(", ")}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={{
                      width: (width - 20) / 2,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>Mute</Text>
                  </Pressable>
                  <Pressable
                    style={{
                      justifyContent: "center",
                      width: (width - 20) / 2,
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>Delete</Text>
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
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
