import Scroll from "@/components/Scroll";
import tw from "@/styles/tailwindColors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";


const DATA_EMPRESAS = [
  {
    id: 1,
    nome: 'Senac'
  },
  {
    id: 2,
    nome: 'Tivoli'
  },
  {
    id: 3,
    nome: 'Ajinomoto'
  },
  {
    id: 4,
    nome: 'Suzano'
  },
]

export default function Index() {

  const [firm, setFirm] = useState<number | null>(null)

  useEffect(() => {
    const selectedFirm = async () => {
      const checkFirm = await AsyncStorage.getItem('@gestor_sos:firm')
    }
    selectedFirm()
  }, [])

  async function selectFirm(id: number) {
    
  }

  return (
    // <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Scroll nav style={{ alignItems: 'center', gap: 12, paddingHorizontal: 10 }}>
      {DATA_EMPRESAS.map((e, i) => (
        <TouchableOpacity style={{ width: '100%' }}>
          <Text key={e.id} style={{
            padding: 20, borderRadius: 999,
            fontSize: 30, textAlign: 'center',
            color: tw.white, backgroundColor: tw.blue['600']
          }}>{e.nome}</Text>
        </TouchableOpacity>
      ))}
    </Scroll>
    // </View>
  )
}