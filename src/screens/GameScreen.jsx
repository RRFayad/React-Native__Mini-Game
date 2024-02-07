import { View, Text } from "react-native";

import Title from "../components/Title";

function GameScreen() {
  return (
    <View className="flex-1 p-[24px]">
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      {/* <Text>LOG ROUNDS</Text> */}
    </View>
  );
}

export default GameScreen;
