import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { LoginScreen } from "./src/LoginScreen/LoginScreen";

export default function App() {
  return (
    <>
      <SafeAreaView />
      <LoginScreen />
    </>
  );
}
