import appColors from "@/styles/appColors";
import { DimensionValue, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

const bgMap = {
  default: 'bg',
  success: 'bgSuccess',
  warning: 'bgWarning',
  danger: 'bgDanger'
} as const

type Props = TouchableOpacityProps & {
  text: string
  size?: number
  width?: DimensionValue
  padding?: number[]
  radius?: number
  type?: keyof typeof bgMap
  flex?: boolean
}

export default function Button({
  text,
  size = 20,
  width = '100%',
  padding = [10, 10],
  radius = 10,
  type = 'default',
  flex,
  onPress,
  disabled = false,
  ...rest
}: Props) {

  const bg = bgMap[type]

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          paddingHorizontal: padding[0],
          paddingVertical: padding[1],
          borderRadius: radius,
          backgroundColor: disabled ? appColors.button[bg] : appColors.button[bg] + '70'
        },
        flex ? { flex: 1 } : { width: width }
      ]}
    >
      <Text style={[styles.text, { fontSize: size }]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}