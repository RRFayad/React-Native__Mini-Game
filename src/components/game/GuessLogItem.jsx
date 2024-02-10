import { View, Text } from "react-native";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View
      className="my-2 w-[100%] flex-row justify-between rounded-2xl border border-primary-800 bg-accent-500 p-[12px] shadow-sm shadow-black"
      style={{ elevation: 8 }}
    >
      <Text className="font-[open-sans]">#{roundNumber}</Text>
      <Text className="font-[open-sans]">
        Opponnent's Guess:{" "}
        <Text className="font-[open-sans-bold]">{guess}</Text>
      </Text>
    </View>
  );
}

export default GuessLogItem;
