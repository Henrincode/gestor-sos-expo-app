import appColors from "@/styles/appColors";
import { Stack } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: appColors.bg } }} />
      </KeyboardProvider>
    </SafeAreaProvider>
  )
}
