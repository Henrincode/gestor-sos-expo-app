import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Scroll from "@/components/Scroll";
import appColors from "@/styles/appColors";
import tailwindColors from "@/styles/tailwindColors";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";

const PADDING = [16, 4]

const FILTER_LIST = ['Tudo', 'Pendentes', 'Em andamento', 'Concluído']

export default function New() {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Tudo')

  return (
    <Scroll nav style={styles.container}>
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
          gap: 10,
          padding: 10,
          alignItems: 'center'
        }}
        style={{ flexGrow: 0, }}
      >

        {FILTER_LIST.map(f => (
          <Button
            key={f} text={f} size={16} padding={PADDING} radius={999} width={'auto'}
            onPress={() => setFilter(f)} background={filter === f ? appColors.button.bg : appColors.button.bg + '70'}
          />
        ))}

      </ScrollView>
      <Text>{filter} {search}</Text>
    </Scroll>
  )
}