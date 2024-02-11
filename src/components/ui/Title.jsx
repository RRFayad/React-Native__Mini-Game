import { Text, View } from "react-native";

function Title({ children, ViewClassName, TextClassName }) {
  return (
    <View className={`border-2 border-white p-[12px] ${ViewClassName}`}>
      <Text
        className={`mx-auto my-auto max-w-[80%] text-center text-2xl font-bold text-white ${TextClassName}`}
      >
        {children}
      </Text>
    </View>
  );
}

export default Title;
