import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
// Create the stack navigator
const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
