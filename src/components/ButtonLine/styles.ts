import appColors from "@/styles/appColors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    outlineWidth: 1,
    outlineOffset: -1,
    outlineStyle: 'solid',
    outlineColor: appColors.button.bg
  },
  text: {
    color: appColors.button.text
  },
  success: {
    backgroundColor: appColors.button.bgSuccess
  }
})

export default styles