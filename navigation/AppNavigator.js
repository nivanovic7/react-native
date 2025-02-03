import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { useSelector } from "react-redux";
import Inbox from "../screens/Inbox";
import Profile from "../screens/Profile";
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
              <Stack.Screen name="Inbox" component={Inbox} />
              <Stack.Screen name="Profile" component={Profile} />
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
