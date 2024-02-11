import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber: pickedNumberHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = (enteredText) => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Value", "Please choose a number between 1 and 99", [
        {
          text: "Ok",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    pickedNumberHandler(chosenNumber);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" className="flex-1">
        <View
          className={`${height < width ? "mt-[30px]" : "mt-[64px]"} flex-1`}
        >
          <Title ViewClassName={"mx-8"}>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              className="mx-auto my-2 h-[50px] w-[50px] border-b-2 border-accent-500 text-center text-3xl font-bold text-accent-500"
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View className="mt-4 flex-row justify-around align-middle">
              <View className="flex-1">
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View className="flex-1">
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;
