import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import { PermissionsAndroid } from "react-native";

function NewPostScreen() {
  const [photo, setPhoto] = useState(null);

  const requestPermissions = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };

  const handleChoosePhoto = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) {
      alert("DENIED");
      return;
    }
    alert("ACC OK");
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      console.log("HEJJJJJJJ");
      if (response.assets && response.assets.length > 0) {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>new pddost</Text>
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder="Post description"
      />
      <Button title="Add image" onPress={handleChoosePhoto} />
    </View>
  );
}

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  header: {
    fontSize: 26,
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    height: 50,
  },
});
