import { TextInput, View, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    // inputContainer
    <View
      className="mx-[24px]  mt-[100px] rounded-lg bg-[#3b021f] p-4 shadow-sm shadow-black"
      style={{ elevation: 80 }} // Used for the shadow in Android
    >
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        className="mx-auto my-2 h-[50px] w-[50px] border-b-2 border-[#ddb52f] text-center text-3xl font-bold text-[#ddb52f]"
      />
      <View className="mt-4 flex-row justify-around align-middle">
        <View className="flex-1">
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View className="flex-1">
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;
