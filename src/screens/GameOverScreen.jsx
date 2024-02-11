import { View, Text, Image, Dimensions } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const width = Dimensions.get("screen").width;

function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame: startNewGameHandler,
}) {
  return (
    <View className="flex-1 items-center justify-center p-3 capitalize">
      <Title ViewClassName={"mx-8"}>GAME OVER !</Title>
      <View
        className={`mx-auto mt-9 ${width > 380 ? "h-[70vw] w-[70vw]" : "h-[50vw] w-[50vw]"} overflow-hidden rounded-full border-2 border-primary-800`}
      >
        <Image
          source={require("../../assets/images/success.png")}
          className="h-[100%] w-[100%]"
        />
      </View>
      <Text className="mt-8 text-center font-[open-sans] text-lg">
        Your phone needed{" "}
        <Text className="font-[open-sans-bold] text-xl text-primary-500">
          {roundsNumber}
        </Text>{" "}
        rounds to guess the number{" "}
        <Text className="font-[open-sans-bold] text-xl text-primary-500">
          {userNumber}
        </Text>
      </Text>
      <PrimaryButton viewClassName={"mt-8"} onPress={startNewGameHandler}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;
