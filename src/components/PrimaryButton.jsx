import { View, Text, Pressable } from "react-native";

function PrimaryButton({ children, onPress: pressHandler }) {
  return (
    <View className="m-[4px]   ">
      <Pressable
        android_ripple={{ color: "" }}
        className=" rounded-3xl bg-[#72063c] px-[16px] py-[8px] active:bg-[#640233]"
        style={{ elevation: 20 }}
        onPress={pressHandler}
      >
        <Text className="text-center text-white">{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
