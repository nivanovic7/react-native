import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { useSelector } from "react-redux";
import InboxScreen from "../screens/InboxScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { StatusBar, StyleSheet, View } from "react-native";
import ChatScreen from "../screens/ChatScreen";

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
              <Stack.Screen
                name="InboxScreen"
                component={InboxScreen}
                options={{ title: "Chats", headerTitleAlign: "center" }}
              />
              <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ title: "Profile", headerTitleAlign: "center" }}
              />
              <Stack.Screen name="ChatScreen" component={ChatScreen} />
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
    paddingTop: StatusBar.currentHeight + 10,
    backgroundColor: "whitesmoke",
  },
});
