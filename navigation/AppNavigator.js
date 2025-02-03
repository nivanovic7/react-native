import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { useSelector } from "react-redux";
import Inbox from "../screens/Inbox";
import Profile from "../screens/Profile";

function AppNavigator() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (isLoggedIn) alert("logged in");
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Inbox" component={Inbox} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
