import { View, Text, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("screen").width; // window = screen + statusbar

function NumberContainer({ children }) {
  return (
    <View
      className={`${deviceWidth > 380 ? "m-[24px]" : "m-[18px]"} items-center justify-center rounded-lg border-4 border-accent-500 ${deviceWidth > 380 ? "p-[24px]" : "p-[12px]"} `}
    >
      <Text
        className={` ${deviceWidth > 380 ? "text-4xl" : "text-3xl"} font-bold text-accent-500`}
      >
        {children}
      </Text>
    </View>
  );
}

export default NumberContainer;
