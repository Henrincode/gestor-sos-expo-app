import appColors from "@/styles/appColors";
import tailwindColors from "@/styles/tailwindColors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 0
  },
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  containerIcon: {
    borderRadius: 8,
    backgroundColor: tailwindColors.blue[200]
  },
  text: {
    fontWeight: "900",
    lineHeight: 36,
    color: appColors.logo.text
  },
  subText: {
    fontWeight: "400",
    lineHeight: 24
  }
})

export default styles