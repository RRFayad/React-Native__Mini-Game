import { Text, View } from "react-native";

function Title({ children }) {
  return (
    <View className="border-2 border-white p-[12px]">
      <Text className="  mx-auto my-auto text-center text-2xl font-bold text-white">
        {children}
      </Text>
    </View>
  );
}

export default Title;
