import appColors from "@/styles/appColors";
import { useEffect, useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import styles from "./styles";

type Props = {
  value: TextInputProps['value'];
  setValue: (param: string) => void;
  type?: TextInputProps['keyboardType'];
  placeholder?: string;
  password?: boolean;
}

export default function Input({ value, setValue, type = 'default', placeholder = '', password = false }: Props) {

  const [newValue, setNewValue] = useState(value);

  const disableAuto = password
    || type === 'email-address'
    || type === 'url'
    || type === 'twitter'
    || type === 'numeric'
    || type === 'decimal-pad'
    || type === 'number-pad'
    || type === 'numbers-and-punctuation'

  useEffect(() => {
    const intervalo = setTimeout(() => {
      setNewValue(value ?? '');
    }, 1500);
    return () => clearTimeout(intervalo);
  }, [value]);

  return (
    <TextInput
      defaultValue={newValue}
      onChangeText={setValue}
      keyboardType={type}
      placeholder={placeholder}
      secureTextEntry={password}
      autoCapitalize={disableAuto ? 'none' : 'sentences'}
      autoCorrect={!disableAuto}
      style={styles.component}
      placeholderTextColor={appColors.input.placeholder}

    />
  );
}