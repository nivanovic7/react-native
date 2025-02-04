import { Button, Text, View } from "react-native";
import { logOut } from "../redux/authSlice";
import { useDispatch } from "react-redux";

function ProfileScreen() {
  const dispatch = useDispatch();

  return (
    <View>
      <Button onPress={() => dispatch(logOut())} title="LOGOUT" />
      <Text>Profiel</Text>
    </View>
  );
}

export default ProfileScreen;
