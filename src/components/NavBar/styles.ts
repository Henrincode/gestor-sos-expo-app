import tailwindColors from "@/styles/tailwindColors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    bottom: 40,
    overflow: 'hidden',
    flexDirection: 'row',
    gap: 8,
    padding: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: tailwindColors.blue['950'] + '1A',
    backgroundColor: tailwindColors.blue['200'] + '4D',
    left: '50%',
    transform: [{translateX: '-50%'}]
  }
})

export default styles