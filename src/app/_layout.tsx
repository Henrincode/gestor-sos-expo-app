import appColors from "@/styles/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: appColors.bg } }} />;
}
