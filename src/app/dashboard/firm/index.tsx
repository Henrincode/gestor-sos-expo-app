import Scroll from "@/components/Scroll";
import tw from "@/styles/tailwindColors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

const STORAGE_FIRM = '@gestor_sos:firm'

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
    const loadFirm = async () => {
      const selectedFirm = await AsyncStorage.getItem(STORAGE_FIRM)

      if (selectedFirm) {
        setFirm(JSON.parse(selectedFirm))
      }

    }
    loadFirm()
  }, [])

  // muda a empresa selecionada
  async function updateFirm(id: number) {
    await AsyncStorage.setItem(STORAGE_FIRM, JSON.stringify(id))
    setFirm(id)
  }

  return (
    <Scroll safeArea nav style={{ alignItems: 'center', gap: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 20 }}>Selecionar empresa</Text>

      {DATA_EMPRESAS.map((e, i) => (
        <TouchableOpacity onPress={() => updateFirm(e.id)} key={e.id} style={{ width: '100%' }}>

          <Text style={{
            padding: 20, borderRadius: 999,
            fontSize: 30, textAlign: 'center',
            color: tw.white, backgroundColor: e.id === firm ? tw.blue['600'] : tw.blue['400']
          }}>
            {e.nome}
          </Text>

        </TouchableOpacity>
      ))}
    </Scroll>
  )

}