import { use, useState } from "react";
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useCreateOutfitMutation } from "../redux/outfitsApi";
function NewPostScreen() {
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState();

  let formData = new FormData();
  const [createOutfit] = useCreateOutfitMutation();

  async function handleSubmit() {
    console.log(photo);
    formData.append("outfitsDescription", desc);
    formData.append("outfitsImages", photo);
    formData.append("likeSetting", "true");
    formData.append("longitude", "17.23434");
    formData.append("latitude", "47.21335");
    formData.append("commentSettings", "true");
    console.log(formData);
    const res = await createOutfit(formData);
    console.log(res);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images", //
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const res = await uriToFile(result.assets[0].uri, "image.jpg");
      setPhoto(result);
    }
  };

  async function uriToFile(uri, fileName) {
    const response = await fetch(uri);
    const blob = await response.blob();
    return new File([blob], fileName, { type: blob.type });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>new post</Text>
      <TextInput
        value={desc}
        onChangeText={setDesc}
        multiline={true}
        style={styles.input}
        placeholder="Post description"
      />
      <Button title="Add image" onPress={pickImage} />
      <Button disabled={!photo} title="Submit" onPress={handleSubmit} />
      {/* <Image source={{ uri: photo[0]?._data.uri }} width={55} height={55} /> */}
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
