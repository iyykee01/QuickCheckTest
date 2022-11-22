import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screen/Auth/LoginScreen/LoginScreen";
import NewsScreen from "../screen/DashBoard/News/NewsScreen";

export type StackParamList = {
  Login: undefined;
  News: undefined;
};
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
