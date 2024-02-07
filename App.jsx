import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
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
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}
