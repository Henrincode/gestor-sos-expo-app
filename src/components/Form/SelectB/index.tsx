import appColors from '@/styles/appColors';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Recursos Humanos', value: '1' },
  { label: 'Financeiro', value: '2' },
  { label: 'Tecnologia da Informação', value: '3' },
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
  { label: 'Pesquisa e Desenvolvimento', value: '14' },
  { label: 'Qualidade', value: '15' },
];

export default function SelectB() {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Selecione..." // Texto inicial exibido
        value={value}
        onChange={item => setValue(item.value)}

        // --- Estilização de Texto e Lista ---
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemTextStyle}
        containerStyle={styles.listContainer}
      // itemContainerStyle={styles.itemContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: appColors.input.border,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  dropdown: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 10
  },
  // Estilo do texto inicial (placeholder)
  placeholderStyle: {
    fontSize: 24,
    color: appColors.input.placeholder,
  },
  // Estilo do texto selecionado dentro do campo
  selectedTextStyle: {
    fontSize: 24,
    color: '#333333',
    // fontWeight: '500'

  },
  // Estilo das opções na lista suspensa
  itemTextStyle: {
    fontSize: 24,
    color: '#333333'
  },
  // Estilo do container da lista que abre
  listContainer: {
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 40,
    borderRadius: 16,
    backgroundColor: 'white',
    width: '90%',
    left: '50%',
    transform: [{translateX: '-50%'}]
    
  },
  itemContainer: {}
});