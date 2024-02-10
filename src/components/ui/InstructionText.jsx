import { Text } from "react-native";

function InstructionText({ children, textClassName }) {
  return (
    <Text
      className={`text-center text-lg font-bold text-accent-500 ${textClassName}`}
    >
      {children}
    </Text>
  );
}

export default InstructionText;
