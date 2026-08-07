import Container from "@/components/container";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Index() {
  return (
    <View style={styles.container} >
      <Container>
        <Text>Olá mundo!</Text>
      </Container>
    </View>
  );
}
