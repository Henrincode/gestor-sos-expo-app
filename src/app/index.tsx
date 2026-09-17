import Button from "@/components/Button";
import Container from "@/components/Container";
import Input from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import Label from "@/components/Form/Label";
import Logo from "@/components/Logo";
import Scroll from "@/components/Scroll";
import { STORAGE_LOGGED } from "@/CONSTANTS";
import auth from "@/services/auth";
import tw from "@/styles/tailwindColors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Errors = {
  email?: string[]
  password?: string[]
  api?: string[]
}

export default function Index() {

  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState<Errors>({})

  const [loadSubmit, setLoadSubmit] = useState(false)

  // se estiver logado redireciona para o dashboard
  useEffect(() => {
    is_logged()
  }, [])

  async function is_logged() {
    setLoading(true)
    const logged = await AsyncStorage.getItem(STORAGE_LOGGED)
    if (logged) {
      router.replace("/dashboard/companies")
    }
    setLoading(false)
  }

  async function submit() {

    setLoadSubmit(true)

    // tratando erros do form
    setErrors({})
    const newErrors: Errors = {}
    const emailErrors: string[] = []
    const passwordErrors: string[] = []

    const cleanEmail = email.trim()

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

    // cria o obj de erros
    if (emailErrors.length > 0) {
      newErrors.email = emailErrors
    }
    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors
    }

    setErrors(newErrors)

    // se ouver erros não envia os dados para o backend
    if (Object.keys(newErrors).length > 0) {
      setLoadSubmit(false)
      return
    }

    const data = await auth.login({ email, password })

    if (!data.message) router.replace('/dashboard')

    console.log('data', data)

    setErrors({ api: ["Email ou senhas inválidos"] })
    setLoadSubmit(false)
  }

  if (loading) return

  const styleError = (p: keyof Errors) => errors[p] && { borderColor: tw.red['600'], backgroundColor: tw.red['100'] }

  return (
    <Scroll safeArea style={styles.container} >

      <Logo title subTitle />

      {/* form */}
      <Container gap={20}>
        <InputGroup >
          <Label icon="mail" text="E-Mail" color={errors.email && tw.red['600']} />
          <Input value={email} setValue={setEmail} style={styleError("email")} />
          {errors.email && errors.email.map(e => (
            <Text key={e} style={{ fontSize: 14, color: tw.red['600'] }}>    • {e}</Text>
          ))}
        </InputGroup>

        <InputGroup >
          <Label icon="lock-closed" text="Confirmar senha" color={errors.password && tw.red['600']} />
          <Input value={password} setValue={setPassword} password style={styleError("password")} />
          {errors.password && errors.password.map(e => (
            <Text key={e} style={{ fontSize: 14, color: tw.red['600'] }}>    • {e}</Text>
          ))}
        </InputGroup>

        {errors.api && (
          <Text style={{ fontSize: 16, fontWeight: "900", textAlign: 'center', color: 'red' }}>
            E-Mail ou senha inválidos!
          </Text>
        )}

        <View style={styles.buttons}>
          <Button disabled={loadSubmit} onPress={submit} text="Entrar" flex />
          <Button disabled={loadSubmit} onPress={() => router.push('/acc/create')} text="Cadastrar" flex />
        </View>
      </Container>
    </Scroll >
  );
}
