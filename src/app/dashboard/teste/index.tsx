import auth from "@/utils/auth";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as SecureStore from "expo-secure-store"

export default function Index() {

  const [dados, setDados] = useState<{mensagem: string}>()

  const testConnect = async () => {
    const dados = {
      email: 'contato@henriquemarques.com.br',
      password: '6969'
    }
    const user = await auth.check()

    console.log('11', user)

    // await SecureStore.deleteItemAsync('auth_token')

  }

  useEffect(() => {
    testConnect()
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{dados?.mensagem ?? 'carregando'}</Text>
    </View>
  )
}