import React from "react";
import { TextInput, View, ViewStyle } from "react-native";

interface CustomInputProps {
  setText: (text: string) => void;
  placeholder: string;
}

const CustomeInput = ({ setText, placeholder }: CustomInputProps) => {
  return (
    <View className="px-2 py-3 mt-3 border border-gray-300 rounded-lg">
      <TextInput
        placeholder={placeholder}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default CustomeInput;
