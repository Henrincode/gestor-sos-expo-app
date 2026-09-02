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
    msg += name.trim() !== '' ? name.trim() + '\n' : 'O campo Nome deve ser preenchido' + '\n'
    msg += email.trim() !== '' ? email.trim() + '\n' : 'O campo E-Mail deve ser preenchido.' + '\n'
    msg += password.trim() === '' ? 'O campo senha deve ser preenchido.' : password === passwordConfir ? 'Senha confere' : 'Senha não confere'

    Alert.alert(
      'teste',
      msg)
  }

  return (
    <View style={styles.container}>
      <Container gap={20}>
        <InputGroup>
          <Label icon="person" text="Nome" />
          <Input value={name} setValue={setName} />
        </InputGroup>
        <InputGroup>
          <Label icon="mail" text="E-Mail" />
          <Input value={email} setValue={setEmail} />
        </InputGroup>
        <InputGroup>
          <Label icon="lock-closed" text="Senha" />
          <Input value={password} setValue={setPassword} password />
        </InputGroup>
        <InputGroup>
          <Label icon="lock-closed" text="Confirmar senha" />
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