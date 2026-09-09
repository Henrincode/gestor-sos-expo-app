import Icon from "@/components/Icon";
import appColors from "@/styles/appColors";
import { ComponentProps, useState } from "react";
import { TextInput, TextInputProps, View, ViewStyle } from "react-native";
import styles from "./styles";

type Props = {
  value: TextInputProps['value']
  setValue: (param: string) => void
  size?: number
  type?: TextInputProps['keyboardType']
  placeholder?: string
  icon?: ComponentProps<typeof Icon>['name']
  password?: boolean
  multiline?: boolean
  numberOfLines?: number
  style?: ViewStyle
  styleText?: TextInputProps['style']
  StylePlaceholder?: TextInputProps['placeholderTextColor']
}

export default function Input({
  value,
  setValue,
  size = 24,
  type = 'default',
  placeholder = '',
  style,
  styleText,
  StylePlaceholder = appColors.input.placeholder,
  icon,
  password = false,
  multiline = false,
  numberOfLines = undefined
}: Props) {

  const [newValue, setNewValue] = useState(value);

  const disableAuto = password
    || type === 'email-address'
    || type === 'url'
    || type === 'twitter'
    || type === 'numeric'
    || type === 'decimal-pad'
    || type === 'number-pad'
    || type === 'numbers-and-punctuation'

  return (
    <View style={[styles.component, style]}>
      {icon && <Icon name={icon} size={size * 1.3} />}
      <TextInput
        multiline={multiline}
        // numberOfLines={numberOfLines || 4}
        textAlignVertical="top"
        defaultValue={newValue}
        onChangeText={setValue}
        keyboardType={type}
        placeholder={placeholder}
        secureTextEntry={password}
        autoCapitalize={disableAuto ? 'none' : 'sentences'}
        autoCorrect={!disableAuto}
        placeholderTextColor={StylePlaceholder}
        style={[{ flex: 1, fontSize: size, paddingVertical: 10, paddingHorizontal: 4 }, multiline && { minHeight: 100 }, styleText]}

      />
    </View>
  );
}