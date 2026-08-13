import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Scroll from "@/components/Scroll";
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
        <Input value={search} setValue={setSearch} placeholder="Pesquisar solicitações" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          gap: 15,
          padding: 10,
          alignItems: 'center'
        }}
        style={{ flexGrow: 0, }}
      >

        {FILTER_LIST.map(f => (
          <Button
            key={f} text={f} size={16} padding={PADDING} radius={999} width={'auto'}
            onPress={() => setFilter(f)} disabled={filter === f}
          />
        ))}

      </ScrollView>
      <Text>{filter}</Text>
    </Scroll>
  )
}