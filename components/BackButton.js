import { Platform, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

function BackButton() {
  const navigation = useNavigation();
  return (
    <Pressable title="Back" onPress={() => navigation.goBack()}>
      {Platform.OS === "ios" ? (
        <Ionicons name="chevron-back" size={24} color="black" />
      ) : (
        <Ionicons name="arrow-back" size={24} color="black" />
      )}
    </Pressable>
  );
}

export default BackButton;
