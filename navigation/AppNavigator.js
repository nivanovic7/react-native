import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { useSelector } from "react-redux";
import InboxScreen from "../screens/InboxScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { StatusBar, StyleSheet, View } from "react-native";

function AppNavigator() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.contrainer}>
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <>
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={HomeScreen}
              />
              <Stack.Screen name="InboxScreen" component={InboxScreen} />
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </>
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    padding: 8,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "red",
  },
});
