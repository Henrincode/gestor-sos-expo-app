import Scroll from "@/components/Scroll";
import { Text } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";

export default function Settings() {

  const [texto, setTexto] = useState('Sem mensagem')

  const rota = 'http://192.168.56.1:3000/api/teste'

  async function testeAPI() {
    const response = await fetch(rota)
    const data = await response.json()
    setTexto(data.mensagem)
    
  }

  useEffect(() => {testeAPI()}, [])


  
  return (
    <Scroll nav style={styles.container}>
      <Text>
        {texto}
      </Text>
    </Scroll>
  )
}