import { useState } from "react";
import { TextInput, View, Text, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

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
    console.log("Ihaa");
  };

  return (
    // inputContainer
    <View
      className="mx-[24px]  mt-[100px] rounded-lg bg-[#3b021f] p-4 shadow-sm shadow-black"
      style={{ elevation: 80 }} // Used for the shadow in Android
    >
      <TextInput
        className="mx-auto my-2 h-[50px] w-[50px] border-b-2 border-[#ddb52f] text-center text-3xl font-bold text-[#ddb52f]"
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
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;
