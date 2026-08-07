import appColors from "@/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 10
  },
  container: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: appColors.container.border,
    backgroundColor: appColors.container.bg
  }
})

export default styles