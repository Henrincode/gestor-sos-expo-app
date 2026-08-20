import tailwindColors from "@/styles/tailwindColors";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    flexDirection: 'row',
    gap: 8,
    padding: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: tailwindColors.blue['950'] + '1A',
    backgroundColor: tailwindColors.blue['200'] + 'aa', //4D
    left: '50%',
    transform: [{translateX: '-50%'}]
  }
})

export default styles