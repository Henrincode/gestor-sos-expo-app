import Container from "@/components/Container";
import Input from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import Label from "@/components/Form/Label";
import { useState } from "react";
import { View } from "react-native";
import styles from "./styles";

export default function Index() {

  const [value, setValue] = useState('')

  return (
    <View style={styles.container} >
      <Container gap={20}>
        <InputGroup >
          <Label icon="email-outline" text="E-Mail" />
          <Input value={value} setValue={setValue} type="email-address" placeholder="seu@email.com" />
        </InputGroup>
        <InputGroup >
          <Label icon="form-textbox-password" text="Senha" />
          <Input value={value} setValue={setValue} placeholder="Su@S3nh@!" password />
        </InputGroup>
      </Container>
    </View>
  );
}
