import { ReactNode } from "react"
import { View, ViewStyle } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-controller"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const NAVBAR_HEIGHT = 110

type Props = {
  children: ReactNode
  style?: ViewStyle
  safeArea?: boolean
  nav?: boolean
}

export default function Scroll({ children, style = {}, safeArea = false, nav = false }: Props) {

  const insets = useSafeAreaInsets()

  const paddingBottom = nav ? NAVBAR_HEIGHT + insets.bottom : insets.bottom + 10

  return (
    <View style={{ flex: 1 }}>

      <KeyboardAwareScrollView
        bottomOffset={30}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          safeArea ? { flex: 0, flexGrow: 1, paddingTop: insets.top + 10, paddingBottom } : {},
        ]}
      >
        {/* preciso de uma view para o children para não competir gap com a view de espaçamento do key... */}
        <View style={[
          { flex: 0, flexGrow: 1 },
          style
        ]}>
          {children}
        </View>
      </KeyboardAwareScrollView>

    </View>
  )
}