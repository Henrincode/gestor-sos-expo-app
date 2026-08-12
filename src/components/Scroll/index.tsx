import { StatusBar } from "expo-status-bar"
import { ReactNode } from "react"
import { View, ViewStyle } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-controller"
import { useSafeAreaInsets } from "react-native-safe-area-context"

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
          { flex: 0, flexGrow: 1 },
        ]}
      >
        {children}
        {/* <View style={{height: 2, backgroundColor: appColors.button}}></View> */}
      </KeyboardAwareScrollView>

    </View>
  )
}