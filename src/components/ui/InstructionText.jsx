import { Text } from "react-native";

function InstructionText({ children, textClassName }) {
  return (
    <Text
      style={{ fontFamily: "open-sans-bold" }}
      className={`text-center text-lg  text-accent-500 ${textClassName}`}
    >
      {children}
    </Text>
  );
}

export default InstructionText;
