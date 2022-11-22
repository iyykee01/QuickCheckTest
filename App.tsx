import { LoginScreen } from "./src/screen/Auth/LoginScreen/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import NewsScreen from "./src/screen/DashBoard/News/NewsScreen";
import StackNavigator from "./src/navigation/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
