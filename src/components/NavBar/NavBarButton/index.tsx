import Icon from "@/components/Icon";
import tailwindColors from "@/styles/tailwindColors";
import { ComponentProps } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import styles from "./styles";

const defaultColor = tailwindColors.blue[900]

type Props = {
  text: string
  icon: ComponentProps<typeof Icon>['name']
  color?: string
  size?: number
  active?: boolean
  onPress?: TouchableOpacityProps['onPress']
}

export default function NavBarButton({ text = 'Sem texto', icon = 'help', color = defaultColor, size = 14, onPress, active }: Props) {

  const isActive: ViewStyle = active ? {
    // borderBottomWidth: 2,
    boxShadow: `0px 2px 0px ${tailwindColors.blue[950]}80`,
    borderRadius: 10,
    borderColor: color + '80',
    backgroundColor: tailwindColors.blue['200']
  } : {}

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, isActive]}>
      <Icon name={icon} color={color} size={size * 2.3} />
      <Text style={[styles.text, { fontSize: size, color }]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}