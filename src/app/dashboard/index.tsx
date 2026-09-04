import Button from "@/components/Button";
import CardOS from "@/components/Card/Os";
import Input from "@/components/Form/Input";
import Scroll from "@/components/Scroll";
import appColors from "@/styles/appColors";
import { default as tailwindColors, default as tw } from "@/styles/tailwindColors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type ListaType = {
  idStatus: number
  status: 'completed' | 'in_progress' | 'pending'
}

const STORAGE_FIRM = '@gestor_sos:firm'

const FILTER_LIST = ['Todas as OS', 'Pendentes', 'Em andamento', 'Concluídas']

const LISTA: ListaType[] = [
  { idStatus: 3, status: 'completed' },
  { idStatus: 3, status: 'completed' },
  { idStatus: 2, status: 'in_progress' },
  { idStatus: 1, status: 'pending' },
  { idStatus: 2, status: 'in_progress' },
  { idStatus: 3, status: 'completed' },
  { idStatus: 3, status: 'completed' },
  { idStatus: 2, status: 'in_progress' },
  { idStatus: 1, status: 'pending' },
  { idStatus: 2, status: 'in_progress' },
  { idStatus: 1, status: 'pending' },
  { idStatus: 1, status: 'pending' },
]

export default function Index() {

  const [firm, setFirm] = useState<number | null>(null)

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(FILTER_LIST[0])

  useEffect(() => {
    const loadFirm = async () => {
      const selectedFirm = await AsyncStorage.getItem(STORAGE_FIRM)

      if (selectedFirm) {
        setFirm(JSON.parse(selectedFirm))
      }
    }
    loadFirm()
  }, [])

  if (!firm) return (
    <Scroll nav style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Selecione uma empresa</Text>
    </Scroll>
  )

  return (
    <Scroll nav style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/dashboard/firm')}>
        <Text style={{
          width: 300, padding: 10, borderRadius: 999,
          fontSize: 16, fontWeight: 'bold', textAlign: 'center',
          color: tw.white, backgroundColor: tw.blue['600']
        }}>Senac Americana</Text>
      </TouchableOpacity>

      <View style={{ gap: 10 }}>
        {/* wrapper */}
        <View style={{ gap: 10, paddingLeft: 10, paddingRight: 10, width: '100%', }}>
          <Input
            value={search} setValue={setSearch} placeholder="Pesquisar solicitações"
            icon="search-circle" style={{ backgroundColor: tailwindColors.white }}
          />
        </View>

        {/* buttons */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            gap: 15,
            paddingHorizontal: 10,
            alignItems: 'center'
          }}
          style={{ flexGrow: 0, }}
        >

          {FILTER_LIST.map(f => (
            <Button
              key={f} text={f} size={14} padding={[10, 8]} radius={999} width={'auto'}
              onPress={() => setFilter(f)} background={filter === f ? appColors.button.bg : appColors.button.bg + '70'}
            />
          ))}

        </ScrollView>
      </View>

      {/* osList */}
      {/* CRIAR O FILTRO COM OS BOTÕES DO TOPO DA TELA */}
      <View style={{ gap: 10, width: '100%', paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 24 }}>Lista de OS</Text>
        {LISTA.map((l, i) => (
          <CardOS key={i} status={l.status} />
        ))}
      </View>
    </Scroll>
  )
}