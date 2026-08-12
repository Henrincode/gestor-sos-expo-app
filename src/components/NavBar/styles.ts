import tailwindColors from "@/styles/tailwindColors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'static',
    width: '100%',
    height: 60,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  navBar: {
    position: 'absolute',
    bottom: 40,
    overflow: 'hidden',
    flexDirection: 'row',
    gap: 8,
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: tailwindColors.blue['950'] + '1A',
    backgroundColor: tailwindColors.blue['200'] + '4D',
    left: '50%',
    transform: [{translateX: '-50%'}]
  }
})

export default styles