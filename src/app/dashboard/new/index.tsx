import Input from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import Label from "@/components/Form/Label";
import Select, { SelectItem } from "@/components/Form/Select";
import Icon from "@/components/Icon";
import Scroll from "@/components/Scroll";
import tw from "@/styles/tailwindColors";
import { Image } from "expo-image";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Button from "@/components/Button";


const SETORES: SelectItem[] = [
  { label: 'Recursos Humanos', value: '1', icon: 'people-outline' },
  { label: 'Financeiro e Controladoria', value: '2', icon: 'cash-outline' },
  { label: 'Tecnologia da Informação e Comunicação', value: '3', icon: 'hardware-chip-outline' },
  { label: 'Marketing e Comunicação', value: '4', icon: 'home' },
  { label: 'Pesquisa e Desenvolvimento', value: '5', icon: 'flask-outline' },
]

const PRIORIDADE: SelectItem[] = [
  { label: 'Baixa', value: '1', icon: "alert-circle", color: 'green' },
  { label: 'Média', value: '2', icon: "alert-circle", color: 'orange' },
  { label: 'Alta', value: '3', icon: "alert-circle", color: 'red' },
]

const FOTOS = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMXqbo-JPCu6IX58mv76yA0Pmi2OPBvGNBfT1xYVNKg&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WHd4ESbtuq5Evntj0bXsvf2oGUFnZtoq4amm-1IhoQ&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHm2iX5Dn4SrBAsELuu7g-BVJc5X1U1fzoHuhBxbOGA&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ81Q8HqHFgDkuA6f6yNg_ly8ML8VpvJZW0_iMhtL7DA&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqCRomMSfElSfyWuapmhr30FsoULh2Gt6adgAGWq9MA&s=10,'
]


export default function Index() {

  const [teste, setTeste] = useState('')

  return (
    <Scroll nav style={styles.container}>
      {/* header */}
      <View style={{ width: '100%', paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 24 }}>
          Nova ordem de serviço
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'light', color: tw.gray['400'] }}>
          Preencha os detalhes para iniciar um novo atendimento
        </Text>
      </View>
      {/* form */}
      <View style={{ gap: 20, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 20 }}>
          Preencha o formulário
        </Text>
        <InputGroup>
          <Label icon="create" text="Título do serviço" />
          <Input
            value={teste}
            setValue={setTeste}
            placeholder="Ex: Reparo interruptor mesa 5"
            style={{ backgroundColor: 'white' }}
          />
        </InputGroup>

        {/* selects */}
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <InputGroup style={{ flex: 1 }}>
            <Label icon="construct" text="Setor responsável" />
            <Select title="Selecione o setor" data={SETORES} />
          </InputGroup>
          <InputGroup style={{ flex: 1 }}>
            <Label icon="alert-circle" text="Prioridade" />
            <Select data={PRIORIDADE} />
          </InputGroup>
        </View>


        <InputGroup>
          <Label icon="business" text="Local do serviço" />
          <Input
            value={teste}
            setValue={setTeste}
            placeholder="Ex: Prédio 4, sala ADM"
            style={{ backgroundColor: 'white' }}
          />
        </InputGroup>
        <InputGroup>
          <Label icon="document-text" text="Descrição detalhada" />
          <Input
            value={teste}
            setValue={setTeste}
            placeholder={`Ex: Problemas na tomada do computador da Ana.\nO computador esta desligando depois de 5min.`}
            size={16}
            multiline
            style={{ backgroundColor: 'white' }}
          />
        </InputGroup>

        {/* lista de fotos */}
        <InputGroup gap={10}>
          <Label icon="camera" text="Anexar fotos" />

          {/* Container Grid */}
          <View style={styles.grid}>
            {/* Botão de adicionar foto */}
            <TouchableOpacity style={styles.itemAdd} onPress={() => { }}>
              <Icon name="camera-outline" size={32} color="#888" />
              <Text style={styles.addText}>Adicionar foto</Text>
            </TouchableOpacity>

            {/* Mapeamento do array de fotos */}
            {FOTOS.map((uri, index) => (
              <View key={index} style={styles.item}>
                <Image source={{ uri }} style={styles.image} contentFit="cover" />
              </View>
            ))}
          </View>
        </InputGroup>

        <Button text="Criar ordem de serviço" />
      </View>
    </Scroll >
  )
}