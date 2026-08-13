import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Scroll from "@/components/Scroll";
import appColors from "@/styles/appColors";
import tailwindColors from "@/styles/tailwindColors";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";

const PADDING = [16, 4]

const FILTER_LIST = ['Todas as OS', 'Pendentes', 'Em andamento', 'Concluídas']

export default function New() {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(FILTER_LIST[0])

  return (
    <Scroll nav style={styles.container}>
      <View style={{gap: 10}}>
        <View style={{ gap: 10, paddingLeft: 10, paddingRight: 10, width: '100%', }}>
          <Input
            value={search} setValue={setSearch} placeholder="Pesquisar solicitações"
            icon="clipboard-search" style={{ backgroundColor: tailwindColors.white }}
          />
        </View>
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
              key={f} text={f} size={14} padding={[10,8]} radius={999} width={'auto'}
              onPress={() => setFilter(f)} background={filter === f ? appColors.button.bg : appColors.button.bg + '70'}
            />
          ))}

        </ScrollView>
      </View>

      {/* osList */}
      <View style={{ width: '100%', paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 24 }}>Lista de OS</Text>
      </View>
      <Text>{filter} {search}</Text>
    </Scroll>
  )
}