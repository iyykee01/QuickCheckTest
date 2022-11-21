import React, { useState } from "react";
import { Text, View } from "react-native";
import { CustomeButton } from "../components/Buttons/CustomButton";
import CustomeInput from "../components/TextInputs/CustomeInput";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoding] = useState(false);

  const loginHanlder = () => {
    setIsLoding(true);
    setTimeout(() => {
      alert(JSON.stringify({ email, password }));
      setIsLoding(false);
    }, 1000);
  };

  return (
    <View className="h-full p-8 mt-10">
      <Text className="text-lg font-semibold text-center">Welcome back.</Text>
      <Text className="text-sm text-center">
        Please Login in to continue the experience
      </Text>

      <CustomeInput placeholder="Email" setText={setEmail} />
      <CustomeInput placeholder="Password" setText={setPassword} />
      <CustomeButton
        title="Proceed"
        onPress={loginHanlder}
        isLoading={isLoading}
      />
    </View>
  );
};
