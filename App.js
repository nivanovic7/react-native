import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator"; // Ensure this path is correct
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { name as appName } from "./app.json";
import { AppRegistry } from "react-native";

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
