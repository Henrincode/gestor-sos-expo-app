import appColors from "@/styles/appColors";
import { DimensionValue, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

const bgMap = {
  default: 'bg',
  success: 'bgSuccess',
  warning: 'bgWarning',
  danger: 'bgDanger',
  neutral: 'bgNeutral'
} as const

type Props = TouchableOpacityProps & {
  text: string
  size?: number
  width?: DimensionValue
  padding?: number
  type?: keyof typeof bgMap
  flex?: boolean
}

export default function ButtonLine({ text, size = 20, padding = 10, type = 'default', width = '100%', onPress, flex, ...rest }: Props) {

  const bg = bgMap[type]

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          padding: padding,
          outlineColor: appColors.button[bg]
        },
        flex ? { flex: 1 } : { width: width }
      ]}
    >
      <Text style={[styles.text, { fontSize: size, color: appColors.button[bg] }]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}