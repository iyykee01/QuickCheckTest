import React, { FC } from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  isLoading: boolean;
}

export const CustomeButton = ({
  onPress,
  title,
  isLoading,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="items-center justify-center py-3 bg-red-600 rounded-lg mt-7"
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text className="text-sm font-semibold text-white">{title}</Text>
      )}
    </Pressable>
  );
};
