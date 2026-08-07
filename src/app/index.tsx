import Container from "@/components/Container";
import Label from "@/components/Form/Label";
import { View } from "react-native";
import styles from "./styles";

export default function Index() {
  return (
    <View style={styles.container} >
      <Container>
        <Label text="E-Mail" icon="shield-lock" />
      </Container>
    </View>
  );
}
