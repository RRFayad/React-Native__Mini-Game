import { Text } from "react-native";

function Title({ children }) {
  return (
    <Text className=" border-2 border-[#ddb52f] p-[12px] text-center text-2xl font-bold text-[#ddb52f]">
      {children}
    </Text>
  );
}

export default Title;
