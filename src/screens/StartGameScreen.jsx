import { TextInput, View, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    // inputContainer
    <View
      className="mx-[24px]  mt-[100px] rounded-lg bg-[#4e0329] p-4 shadow-sm shadow-black"
      style={{ elevation: 80 }} // Used for the shadow in Android
    >
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        className="mx-auto my-2 h-[50px] w-[50px] border-b-2 border-[#ddb52f] text-center text-3xl font-bold text-[#ddb52f]"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;
