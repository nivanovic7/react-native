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
import { Link } from "@react-navigation/native";
import ChatScreen from "./ChatScreen";
import ChatAvatar from "../components/ChatAvatar";
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
            <Link
              key={(item) => item._id}
              screen={ChatScreen}
              style={styles.container}
            >
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
                {item.chatMembers.length > 2 && <Text>GROUP</Text>}
                <ChatAvatar item={item} />
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
                      width: 80,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>Mute</Text>
                  </Pressable>
                  <Pressable
                    style={{
                      justifyContent: "center",
                      width: 80,
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>Delete</Text>
                  </Pressable>
                </View>
              </ScrollView>
            </Link>
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
