import { ReactNode } from "react"
import { View } from "react-native"
import styles from "./styles"

type Props = {
  children: ReactNode
  width?: number
  padding?: number
}

export default function Container({ children, width, padding }: Props) {

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {children}
      </View>
    </View>
  )
}