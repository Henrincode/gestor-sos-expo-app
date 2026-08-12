import NavBar from "@/components/NavBar";
import appColors from "@/styles/appColors";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{flex: 1}}>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: appColors.bg } }} />
      <NavBar />
    </View>
  )
}
