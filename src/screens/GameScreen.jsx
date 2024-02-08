import { useState } from "react";
import { View, Text, Alert } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateNumberBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1; // As these are outside the component, these will not re-render
let maxBoundary = 100;

function GameScreen({ userNumber }) {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction == "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "YOu know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    direction === "lower"
      ? (maxBoundary = currentGuess)
      : (minBoundary = currentGuess);
    const newRndNumber = generateNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <View className="flex-1 p-[24px]">
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View className="">
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      {/* <Text>LOG ROUNDS</Text> */}
    </View>
  );
}

export default GameScreen;
