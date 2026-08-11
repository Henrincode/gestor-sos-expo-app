import Button from "@/components/Button";
import ButtonLine from "@/components/ButtonLine";
import Container from "@/components/Container";
import Input from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import Label from "@/components/Form/Label";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";
import styles from "./styles";

export default function Index() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfir, setPasswordConfir] = useState('')

  function teste() {

    let msg = ''
    msg += name + '\n'
    msg += email + '\n'
    msg += password === passwordConfir && password.trim() !== '' && passwordConfir.trim() !== '' ? 'Senha confere' : 'Senha não confere'

    Alert.alert(
      'teste',
      msg)
  }

  return (
    <View style={styles.container}>
      <Container gap={20}>
        <InputGroup>
          <Label icon="account" text="Nome" />
          <Input value={name} setValue={setName} />
        </InputGroup>
        <InputGroup>
          <Label icon="email" text="E-Mail" />
          <Input value={email} setValue={setEmail} />
        </InputGroup>
        <InputGroup>
          <Label icon="form-textbox-password" text="Senha" />
          <Input value={password} setValue={setPassword} password />
        </InputGroup>
        <InputGroup>
          <Label icon="form-textbox-password" text="Confirmar senha" />
          <Input value={passwordConfir} setValue={setPasswordConfir} password />
        </InputGroup>
        <View style={styles.buttons}>
          <Button onPress={teste} text="Cadastrar" flex />
          <ButtonLine onPress={() => router.back()} text="Já tenho conta" flex type="neutral" />
        </View>
      </Container>
    </View>
  )
}