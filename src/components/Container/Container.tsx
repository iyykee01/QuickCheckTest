import React from "react";
import { SafeAreaView, View } from "react-native";

interface ContainerProps {
  children: JSX.Element;
}

const Container = ({ children }: ContainerProps) => {
  return <View className="flex-1">{children}</View>;
};

export default Container;
