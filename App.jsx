import { useState } from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./src/screens/StartGameScreen";
import GameScreen from "./src/screens/GameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#4e0329", "#ddb52f"]} className="flex-1 ">
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          className="flex-1"
          imageStyle={{ opacity: 0.15 }}
        >
          <SafeAreaView className="flex-1">
            {!userNumber && (
              <StartGameScreen onPickNumber={pickedNumberHandler} />
            )}
            {userNumber && !gameIsOver && (
              <GameScreen
                userNumber={userNumber}
                onGameOver={() => setGameIsOver(true)}
              />
            )}
            {gameIsOver && <GameOverScreen />}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}
