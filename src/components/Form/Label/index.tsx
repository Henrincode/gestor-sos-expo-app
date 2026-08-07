import Icon from "@/components/Icon";
import { ComponentProps } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const size = styles.text.fontSize

// Omitimos o 'name' das props herdadas para evitar conflitos com a prop 'icon'
type Props = {
  text: string
  icon?: ComponentProps<typeof Icon>['name']
  fontSize?: number
};

export default function Label({ text, icon, fontSize = size }: Props) {
  return (
    <View style={styles.container}>
      {icon !== undefined && <Icon name={icon} size={fontSize * 1.3} color={styles.text.color} />}
      <Text style={[styles.text, { fontSize }]}>
        {text}
      </Text>
    </View>
  );
}