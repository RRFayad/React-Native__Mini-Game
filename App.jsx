import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#4e0329", "#ddb52f"]} className="flex-1 ">
        <StartGameScreen />
      </LinearGradient>
    </>
  );
}
