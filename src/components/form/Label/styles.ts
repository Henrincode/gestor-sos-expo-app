import appColors from "@/styles/appColors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 14,
    color: appColors.text
  }
})

export default styles