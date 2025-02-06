import { Button, Image, StyleSheet, Text, View } from "react-native";
import { logOut } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

function ProfileScreen() {
  const dispatch = useDispatch();
  const {
    userProfileImg,
    user: {
      userEmail,
      userName,
      userRelationshipStatus,
      userLastName,
      userFirstName,
    },
  } = useSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{ uri: userProfileImg.imageMediumSource }}
        />
        <Button
          onPress={() => alert("Feature not implemented yet.")}
          style={styles.button}
          title="Update profile image"
        />

        <Button title="Logout" onPress={() => dispatch(logOut())} />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.text}>First Name</Text>
          <Text style={styles.text}>Last Name</Text>
          <Text style={styles.text}>Username</Text>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.text}>Realtionship status</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.text, styles.highlighted]}>
            {userFirstName || "n/a"}
          </Text>
          <Text style={[styles.text, styles.highlighted]}>
            {userLastName || "n/a"}
          </Text>
          <Text style={[styles.text, styles.highlighted]}>{userName}</Text>
          <Text style={[styles.text, styles.highlighted]}>{userEmail}</Text>
          <Text style={[styles.text, styles.highlighted]}>
            {userRelationshipStatus}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
  header: {
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 40,
    borderBottomColor: "lightgray",
    gap: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  info: {
    paddingLeft: 12,
    gap: 20,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "transparent",
    width: "100%",
    alignSelf: "stretch",
  },
  highlighted: {
    fontWeight: "bold",
    borderColor: "lightgray",
  },
});
