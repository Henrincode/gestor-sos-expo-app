import Container from "@/components/Container";
import Input from "@/components/Form/Input";
import { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Index() {

  const [value, setValue] = useState('testeeeat')

  return (
    <View style={styles.container} >
      <Container>
        <Input value={value} setValue={setValue} type="email-address" placeholder="aaa" password />
        <Text>{value}</Text>
      </Container>
    </View>
  );
}
