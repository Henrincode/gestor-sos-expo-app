import { ReactNode } from "react"
import { View } from "react-native"
import styles from "./styles"

type Props = {
  children: ReactNode
  width?: number
  padding?: number
  margin?: number
  gap?: number
}

export default function Container({ children, width, padding, margin, gap }: Props) {

  return (
    <View style={[styles.wrapper, width !== undefined && { width }, margin !== undefined && { padding: margin }]}>
      <View style={[styles.container, padding !== undefined && { paddingHorizontal: padding }, gap !== undefined && { gap }]}>
        {children}
      </View>
    </View>
  )
}