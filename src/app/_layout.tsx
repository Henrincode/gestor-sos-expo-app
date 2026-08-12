import appColors from "@/styles/appColors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: appColors.bg } }} />
      </KeyboardProvider>
    </SafeAreaProvider>
  )
}
