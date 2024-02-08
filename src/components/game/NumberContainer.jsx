import { View, Text } from "react-native";

function NumberContainer({ children }) {
  return (
    <View className="border-accent-500 m-[24px] items-center justify-center rounded-lg border-4 p-[24px]">
      <Text className="text-accent-500 text-4xl font-bold">{children}</Text>
    </View>
  );
}

export default NumberContainer;
