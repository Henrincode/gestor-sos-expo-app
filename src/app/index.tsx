import Button from "@/components/Button";
import Container from "@/components/Container";
import Input from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import Label from "@/components/Form/Label";
import Logo from "@/components/Logo";
import Scroll from "@/components/Scroll";
import { STORAGE_LOGGED } from "@/CONSTANTS";
import auth from "@/utils/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import styles from "./styles";

export default function Index() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async () => {
    console.log('clicado')
    const data = await auth.login({ email, password })
    console.log('data front', data)
  }


  useEffect(() => {
    async function loggedTest() {
      const teste = await AsyncStorage.getItem(STORAGE_LOGGED)
      console.log(teste)
      if (teste) {
        router.push("/dashboard/companies")

      }
    }
    loggedTest()
  }, [])

  return

  return (
    <Scroll safeArea style={styles.container} >

      <Logo title subTitle />

      {/* form */}
      <Container gap={20}>
        <InputGroup >
          <Label icon="mail-outline" text="E-Mail" />
          <Input value={email} setValue={setEmail} type="email-address" placeholder="seu@email.com" />
        </InputGroup>
        <InputGroup >
          <Label icon="lock-closed-outline" text="Senha" />
          <Input value={password} setValue={setPassword} placeholder="ex: Su@S3nh@!" password />
        </InputGroup>
        <View style={styles.buttons}>
          <Button onPress={submit} text="Entrar" flex />
          <Button onPress={() => router.push('/acc/create')} text="Cadastrar" flex />
        </View>
      </Container>
    </Scroll >
  );
}
