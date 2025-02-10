import { Button, Text, View } from "react-native";

const handleChoosePhoto = async () => {
  console.log("WDFSDSDF");
  const hasPermission = await requestPermissions();
  if (!hasPermission) {
    console.log("Permission Denied");
    return;
  }

  const options = {
    mediaType: "photo",
    quality: 1,
    selectionLimit: 1, // Ensure only one image is selected
  };

  launchImageLibrary(options, (response) => {
    console.log("Response:", response); // Debugging

    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.errorMessage) {
      console.log("Image Picker Error: ", response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      console.log("Photo URI:", response.assets[0].uri);
      setPhoto(response.assets[0].uri);
    }
  });
};

function NotificationsScreen() {
  return (
    <View>
      <Text>NotificationsScreen</Text>
      <Button title="Add img" onPress={handleChoosePhoto} />
    </View>
  );
}

export default NotificationsScreen;
