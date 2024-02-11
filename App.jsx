import { useState, useCallback } from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./src/screens/StartGameScreen";
import GameScreen from "./src/screens/GameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(1);
  const [gameIsOver, setGameIsOver] = useState(false);

  const [fontsIsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsIsLoaded]);

  if (!fontsIsLoaded) {
    return null;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const startNewGameHandler = () => {
    setGameIsOver(false);
    setUserNumber(null);
    setGuessRounds(1);
  };

  return (
    <>
      {fontsIsLoaded && (
        <>
          <StatusBar style="light" />
          <LinearGradient
            colors={["#4e0329", "#ddb52f"]}
            className="flex-1"
            onLayout={onLayoutRootView}
          >
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
                    onGuess={() => setGuessRounds((prevState) => prevState + 1)}
                  />
                )}
                {gameIsOver && (
                  <GameOverScreen
                    userNumber={userNumber}
                    roundsNumber={guessRounds}
                    onStartNewGame={startNewGameHandler}
                  />
                )}
              </SafeAreaView>
            </ImageBackground>
          </LinearGradient>
        </>
      )}
    </>
  );
}
