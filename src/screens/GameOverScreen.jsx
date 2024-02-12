import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame: startNewGameHandler,
}) {
  const { width, height } = useWindowDimensions();

  return (
    // contentContainerStyle={{ display: "flex", justifyContent: "center" }}

    <ScrollView
      contentContainerStyle={{
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <View className="flex-1 items-center justify-center p-3 capitalize">
        <Title ViewClassName={"mx-8"}>GAME OVER !</Title>
        <View
          className={`mx-auto mt-9 ${width < height ? "h-[150px] w-[150px]" : "h-[80px] w-[80px]"}  overflow-hidden rounded-full border-2 border-primary-800`}
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
    </ScrollView>
  );
}

export default GameOverScreen;
