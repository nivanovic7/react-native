import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./FeedScreen";
import SearchScreen from "./SearchScreen";
import NewPostScreen from "./NewPostScreen";
import ReelsScreen from "./ReelsScreen";
import NotificationsScreen from "./NotificationsScreen";
import TabIcons from "../components/TabIcons";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarIcon: () => TabIcons(route),
      })}
    >
      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="ReelsScreen" component={ReelsScreen} />
      <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 10,
    height: 66,
    margin: 15,
    backgroundColor: "#201f2f",
    borderRadius: 24,
  },
  tabBarItem: {
    borderRadius: 8,
  },
  tabBarIcon: {
    position: "absolute",
    transform: "translateY(16px)",
  },
});
