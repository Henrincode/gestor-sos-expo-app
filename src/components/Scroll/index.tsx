import tailwindColors from "@/styles/tailwindColors"
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
          { flex: 0, flexGrow: 1, paddingTop: insets.top + 10, paddingBottom }
        ]}
      >
        <View style={[
          style,
          { flex: 0, flexGrow: 1, width: '100%' },
        ]}>
          {children}
        </View>
        <View style={{ width: '100%', height: 1, marginTop: 20, backgroundColor: tailwindColors.blue['200'] }}></View>
      </KeyboardAwareScrollView>

    </View>
  )
}