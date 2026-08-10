import appColors from "@/styles/appColors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: appColors.button.bg
  },
  text: {
    color: appColors.button.text
  },
  success: {
    backgroundColor: appColors.button.bgSuccess
  }
})

export default styles