import Scroll from "@/components/Scroll";
import { Text } from "react-native";
import styles from "./styles";

export default function Settings() {
  return (
    <Scroll nav style={styles.container}>
      <Text>
        Perfil
      </Text>
    </Scroll>
  )
}