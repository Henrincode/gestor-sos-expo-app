import Icon from "@/components/icon";
import { ComponentProps } from "react";
import { View } from "react-native";

// Omitimos o 'name' das props herdadas para evitar conflitos com a prop 'icon'
type Props = Omit<ComponentProps<typeof Icon>, 'name'> & {
  icon?: ComponentProps<typeof Icon>['name'];
  text: string;
};

export default function Label({ text, icon, ...rest }: Props) {
  return (
    <View>
      {icon && <Icon name={icon} {...rest} />}
    </View>
  );
}