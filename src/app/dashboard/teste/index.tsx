import auth from "@/utils/auth";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {

  const [dados, setDados] = useState<{mensagem: string}>()

  const testConnect = async () => {
    const dados = {
      email: 'contato@henriquemarques.com.br',
      password: '6969'
    }
    await auth.login(dados)
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