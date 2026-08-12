import appColors from "@/styles/appColors"
import { StatusBar } from "expo-status-bar"
import { ReactNode } from "react"
import { KeyboardAvoidingView, ScrollView, View, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const NAVBAR_HEIGHT = 120

type Props = {
  children: ReactNode
  style?: ViewStyle
  nav?: boolean
}

export default function Scroll({ children, style = {}, nav = false }: Props) {

  const insets = useSafeAreaInsets()

  const paddingBottom = nav ? NAVBAR_HEIGHT + insets.bottom : insets.bottom + 10

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />

      <KeyboardAwareScrollView
        bottomOffset={30}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingTop: insets.top, paddingBottom },
          style,
          { flexGrow: 1 },
        ]}
      >
          {children}
          {/* <View style={{height: 2, backgroundColor: appColors.button}}></View> */}
      </KeyboardAwareScrollView>

    </View>
  )
}