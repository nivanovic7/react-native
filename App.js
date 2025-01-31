import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator"; // Ensure this path is correct
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
