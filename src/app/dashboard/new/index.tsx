import Input from "@/components/Form/Input";
import InputGroup from "@/components/Form/InputGroup";
import Label from "@/components/Form/Label";
import Select from "@/components/Form/Select";
import Scroll from "@/components/Scroll";
import tw from "@/styles/tailwindColors";
import { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

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
          <Label icon="note-edit-outline" text="Título do serviço" />
          <Input
            value={teste}
            setValue={setTeste}
            placeholder="Ex: Reparo interruptor mesa 5"
            style={{ backgroundColor: 'white' }}
          />
        </InputGroup>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <InputGroup style={{ flex: 1 }}>
            <Label icon="domain" text="Setor" />
            <Select />
          </InputGroup>
          <InputGroup style={{ flex: 1 }}>
            <Label icon="domain" text="Setor" />
            <Select />
          </InputGroup>
        </View>
      </View>
    </Scroll >
  )
}