import Scroll from "@/components/Scroll";
import { Text } from "react-native";
import styles from "./styles";

export default function Index() {
  return (
    <Scroll nav style={styles.container}>
      <Text>
        Olá Mundo!
      </Text>
    </Scroll>
  )
}