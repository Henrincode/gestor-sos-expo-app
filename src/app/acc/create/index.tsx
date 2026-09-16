import Button from "@/components/Button";
import ButtonLine from "@/components/ButtonLine";
import Container from "@/components/Container";
import Input from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import Label from "@/components/Form/Label";
import Logo from "@/components/Logo";
import Scroll from "@/components/Scroll";
import auth from "@/services/auth";
import tw from "@/styles/tailwindColors";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Errors = {
  name?: string[]
  email?: string[]
  password?: string[]
}

export default function Index() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfir, setPasswordConfir] = useState('')

  const [errors, setErrors] = useState<Errors>({})

  async function submit() {

    // tratando erros do form
    setErrors({})
    const newErrors: Errors = {}
    const nameErrors: string[] = []
    const emailErrors: string[] = []
    const passwordErrors: string[] = []

    const cleanName = name.trim()
    const cleanEmail = email.trim()

    // name
    if (!cleanName) {
      nameErrors.push('Precisa ser preenchido')
    }

    if (cleanName.length < 3) {
      nameErrors.push('Pelo menos 3 letras')
    }

    if (/\d/.test(cleanName)) {
      nameErrors.push('O nome não pode conter números.');
    }

    // email
    if (!cleanEmail) {
      emailErrors.push('Precisa ser preenchido')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      emailErrors.push('Email precisa conter ex: meu@email.com')
    }

    // password
    if (!password) {
      passwordErrors.push('Precisa ser preenchido')
    }

    if (password.length < 8) {
      passwordErrors.push('Precisa ter ao menos 8 caracteres')
    }

    if (password !== passwordConfir) {
      passwordErrors.push('As senhas precisam ser iguais')
    }

    // cria o obj de erros
    if (nameErrors.length > 0) {
      newErrors.name = nameErrors
    }
    if (emailErrors.length > 0) {
      newErrors.email = emailErrors
    }
    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    // caso não exista erros cria o usuário
    const newUser = {
      name, email, password
    }

    const data = await auth.create(newUser)

    // se email já existir cancela o cadastro
    if (data.message === "E-Mail já cadastrado.") {
      setErrors({ email: ["E-Mail já cadastrado."] })
      return
    }

    router.replace("/dashboard")
  }

  const styleError = (p: keyof Errors) => errors[p] && { borderColor: tw.red['600'], backgroundColor: tw.red['100'] }

  return (
    <Scroll nav safeArea style={styles.container}>

      <Logo title subTitle />

      <Container gap={20}>

        <InputGroup>
          <Label icon="person" text="Nome" color={errors.name && tw.red['600']} />
          <Input value={name} setValue={setName} style={styleError("name")} />
          {errors.name && errors.name.map(e => (
            <Text key={e} style={{ fontSize: 14, color: tw.red['600'] }}>    • {e}</Text>
          ))}
        </InputGroup>

        <InputGroup>
          <Label icon="mail" text="E-Mail" color={errors.email && tw.red['600']} />
          <Input value={email} setValue={setEmail} style={styleError("email")} />
          {errors.email && errors.email.map(e => (
            <Text key={e} style={{ fontSize: 14, color: tw.red['600'] }}>    • {e}</Text>
          ))}
        </InputGroup>

        <InputGroup>
          <Label icon="lock-closed" text="Senha" color={errors.password && tw.red['600']} />
          <Input value={password} setValue={setPassword} password style={styleError("password")} />
        </InputGroup>

        <InputGroup>
          <Label icon="lock-closed" text="Confirmar senha" color={errors.password && tw.red['600']} />
          <Input value={passwordConfir} setValue={setPasswordConfir} password style={styleError("password")} />
          {errors.password && errors.password.map(e => (
            <Text key={e} style={{ fontSize: 14, color: tw.red['600'] }}>    • {e}</Text>
          ))}
        </InputGroup>
        <View style={styles.buttons}>
          <Button onPress={submit} text="Cadastrar" flex />
          <ButtonLine onPress={() => router.back()} text="Já tenho conta" flex type="neutral" />
        </View>

      </Container>
    </Scroll>
  )
}