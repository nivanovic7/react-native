import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useCreateOutfitMutation } from "../redux/outfitsApi";

function NewPostScreen() {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  let formData = new FormData();
  const [createOutfit] = useCreateOutfitMutation();
  console.log("sdg");
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setFile(result);
      }
    }
  };

  function handleSubmit() {
    console.log(file);
    formData.append("outfitsDescription", desc);
    formData.append("outfitsImages", file.assets[0]);
    formData.append("likeSetting", "true");
    formData.append("longitude", "17.23434");
    formData.append("latitude", "47.21335");
    formData.append("commentSettings", "true");

    console.log(formData);
    createOutfit(formData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>new pddost</Text>
      <TextInput
        value={desc}
        onChangeText={setDesc}
        multiline={true}
        style={styles.input}
        placeholder="Post description"
      />
      <Button title="Add image" onPress={pickImage} />
      <Button disabled={!file} title="Submit" onPress={handleSubmit} />
      <Image source={{ uri: file?.assets[0]?.uri }} width={55} height={55} />
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
