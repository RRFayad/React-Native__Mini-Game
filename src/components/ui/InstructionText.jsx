import { Text } from "react-native";

function InstructionText({ children }) {
  return (
    <Text className="text-center text-lg font-bold text-accent-500">
      {children}
    </Text>
  );
}

export default InstructionText;
