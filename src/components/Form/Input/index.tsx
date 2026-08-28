import Icon from "@/components/Icon";
import appColors from "@/styles/appColors";
import { ComponentProps, useEffect, useState } from "react";
import { TextInput, TextInputProps, View, ViewStyle } from "react-native";
import styles from "./styles";

type Props = {
  value: TextInputProps['value']
  setValue: (param: string) => void
  size?: number
  type?: TextInputProps['keyboardType']
  placeholder?: string
  placeholderStyle?: TextInputProps['placeholderTextColor']
  icon?: ComponentProps<typeof Icon>['name']
  style?: ViewStyle
  password?: boolean
  multiline?: boolean
  numberOfLines?: number
}

export default function Input({
  value,
  setValue,
  size = 24,
  type = 'default',
  placeholder = '',
  placeholderStyle = appColors.input.placeholder,
  icon,
  style,
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

  // useEffect(() => {
  //   const intervalo = setTimeout(() => {
  //     setNewValue(value ?? '');
  //   }, 1500);
  //   return () => clearTimeout(intervalo);
  // }, [value]);

  useEffect(() => setNewValue(value), [])

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
        placeholderTextColor={placeholderStyle}
        style={[{ flex: 1, fontSize: size, paddingVertical: 10, paddingHorizontal: 4 }, multiline && { minHeight: 100 }]}

      />
    </View>
  );
}