import { View } from "react-native";

function Card({ children }) {
  return (
    <View
      className="mx-[24px]  mt-[36px] rounded-lg bg-primary-800 p-4 shadow-sm shadow-black"
      style={{ elevation: 80 }} // Used for the shadow in Android
    >
      {children}
    </View>
  );
}

export default Card;
