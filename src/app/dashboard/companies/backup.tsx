import Scroll from "@/components/Scroll";
import { STORAGE_COMPANY } from "@/CONSTANTS";
import companiesService from "@/services/companies";
import tw from "@/styles/tailwindColors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";


const DATA_EMPRESAS = [
  {
    id: 1,
    nome: 'Senac'
  },
]

type Company = {
  id: number
  name: string
}

export default function Index() {

  const [loading, setLoading] = useState(true)

  const [company, setCompany] = useState<number | null>(null)
  const [companyList, setCompanyList] = useState<Company[]>([])

  useEffect(() => {
    load()
  }, [])


  async function load() {
    // carrega a empresa selecionada
    const selectedCompany = await AsyncStorage.getItem(STORAGE_COMPANY)

    if (selectedCompany) {
      setCompany(JSON.parse(selectedCompany))
    }

    // carrega empresas do banco de dados
    const dataCompany = await companiesService.findAll()

    console.log(dataCompany)

    if(!dataCompany.data) return

    setCompanyList(dataCompany.data)
  }

  // muda a empresa selecionada
  async function updateCompany(id: number) {
    await AsyncStorage.setItem(STORAGE_COMPANY, JSON.stringify(id))
    setCompany(id)
  }

  return (
    <Scroll safeArea nav style={{ alignItems: 'center', gap: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 20 }}>Selecionar empresa</Text>

      {companyList.length > 0 && companyList.map((e, i) => (
        <TouchableOpacity onPress={() => updateCompany(e.id)} key={e.id} style={{ width: '100%' }}>

          <Text style={{
            padding: 20, borderRadius: 999,
            fontSize: 30, textAlign: 'center',
            color: tw.white, backgroundColor: e.id === company ? tw.blue['600'] : tw.blue['400']
          }}>
            {e.name}
          </Text>

        </TouchableOpacity>
      ))}
    </Scroll>
  )

}