import { View, Text, Pressable } from "react-native";

function PrimaryButton({
  children,
  onPress: pressHandler,
  viewClassName,
  pressablaClassName,
}) {
  return (
    <View className={`m-[4px] ${viewClassName}`}>
      <Pressable
        android_ripple={{ color: "" }}
        className={`rounded-3xl bg-primary-500 px-[16px] py-[8px] active:bg-primary-600 ${pressablaClassName}`}
        style={{ elevation: 20 }}
        onPress={pressHandler}
      >
        <Text className="text-center text-white">{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
