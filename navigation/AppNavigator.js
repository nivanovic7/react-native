import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { useSelector } from "react-redux";
import InboxScreen from "../screens/InboxScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import ChatScreen from "../screens/ChatScreen";
import { SafeAreaView } from "react-native-safe-area-context";

function AppNavigator() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.contrainer}>
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
              <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                params={{ id: "sdfsfd" }}
              />
            </>
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
});
