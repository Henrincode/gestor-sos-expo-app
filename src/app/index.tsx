import Button from "@/components/Button";
import Container from "@/components/Container";
import Input from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import Label from "@/components/Form/Label";
import Logo from "@/components/Logo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import styles from "./styles";

export default function Index() {

  const [value, setValue] = useState('')

  const router = useRouter()

  function click() {
    router.navigate('/acc/create')
  }

  return (
    <View style={styles.container} >

      <Logo title subTitle />

      {/* form */}
      <Container gap={20}>
        <InputGroup >
          <Label icon="email-outline" text="E-Mail" />
          <Input value={value} setValue={setValue} type="email-address" placeholder="seu@email.com" />
        </InputGroup>
        <InputGroup >
          <Label icon="form-textbox-password" text="Senha" />
          <Input value={value} setValue={setValue} placeholder="Su@S3nh@!" password />
        </InputGroup>
        <View style={styles.buttons}>
          <Button onPress={click} text="Entrar" flex />
          <Button text="Cadastrar" flex />
        </View>
      </Container>
    </View>
  );
}
