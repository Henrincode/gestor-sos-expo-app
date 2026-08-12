import appColors from "@/styles/appColors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10

  },
  backText: {
    fontSize: 16,
    textAlign: 'center',
    color: appColors.button.bg
  }
})

export default styles