import appColors from '@/styles/appColors';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const setoresData = [
  { label: 'Recursos Humanos', value: '1' },
  { label: 'Financeiro', value: '2' },
  { label: 'Tecnologia da Informação e Comunicação', value: '3' },
  { label: 'Marketing', value: '4' },
  { label: 'Vendas', value: '5' },
  { label: 'Comercial', value: '6' },
  { label: 'Atendimento ao Cliente', value: '7' },
  { label: 'Operações', value: '8' },
  { label: 'Logística', value: '9' },
  { label: 'Compras', value: '10' },
  { label: 'Jurídico', value: '11' },
  { label: 'Contabilidade', value: '12' },
  { label: 'Administrativo', value: '13' },
  { label: 'Pesquisa e Desenvolvimento de Produtos', value: '14' },
  { label: 'Qualidade', value: '15' },
];

export default function SelectPicker() {
  const [selectedValue, setSelectedValue] = useState<string>();

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
        dropdownIconColor="#444"
        mode="dialog" // Usa o Modal nativo do Android em vez do Dropdown (evita o crash no Expo Go)
      >
        {/* Item fake usado apenas de placeholder nativo sem manipular o array */}
        <Picker.Item 
          label="Selecione um setor..." 
          value="" 
          enabled={false} 
          color={appColors.input?.placeholder || '#999'} 
        />

        {setoresData.map((setor) => (
          <Picker.Item
            key={setor.value}
            label={setor.label}
            value={setor.value}
            color="#333"
            style={styles.pickerItem}
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: appColors.input?.border || '#CCC',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 52,
  },
  pickerItem: {
    fontSize: 18,
  },
});