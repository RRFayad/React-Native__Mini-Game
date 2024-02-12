import { useEffect, useState } from "react";
import { View, Text, Alert, FlatList, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

const generateNumberBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary; // As these are outside the component, these will not re-render
let maxBoundary;

function GameScreen({
  userNumber,
  onGameOver: gameOverHandler,
  onGuess: guessCounter,
}) {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessesList, setGuessesList] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
      ? (maxBoundary = currentGuess - 1)
      : (minBoundary = currentGuess + 1);
    const newRndNumber = generateNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    guessCounter();
    setGuessesList((prevState) => [newRndNumber, ...prevState]);
    setCurrentGuess(newRndNumber);
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText textClassName={"mb-[12]"}>
          Higher or Lower?
        </InstructionText>
        <View className="flex-row justify-center">
          <View className="flex-1">
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove-outline" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View className="flex-1">
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > height) {
    content = (
      <>
        <InstructionText textClassName={"mb-[12]"}>
          Higher or Lower?
        </InstructionText>
        <View className="flex-row items-center">
          <View className="flex-1">
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove-outline" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View className="flex-1">
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View className="flex-1 p-[24px]">
      <Title>Opponent's Guess</Title>
      {content}
      <FlatList
        data={guessesList}
        renderItem={(itemData) => {
          return (
            <GuessLogItem
              guess={itemData.item}
              roundNumber={guessesList.length - itemData.index}
            />
          );
        }}
        keyExtractor={(item, index) => index}
        className="mt-6"
      />
    </View>
  );
}

export default GameScreen;
