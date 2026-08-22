import appColors from '@/styles/appColors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
// 1. Importe o Text nativo do react-native
import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const setoresData = [
  { label: 'Recursos Humanos', value: '1', icon: 'people-outline' },
  { label: 'Financeiro e Controladoria', value: '2', icon: 'cash-outline' },
  { label: 'Tecnologia da Informação e Comunicação', value: '3', icon: 'hardware-chip-outline' },
  { label: 'Marketing e Comunicação', value: '4', icon: 'megamenu-outline' },
  { label: 'Pesquisa e Desenvolvimento', value: '5', icon: 'flask-outline' },
];

export default function Select() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={setoresData}
        onSelect={(selectedItem) => setValue(selectedItem.value)}
        showsVerticalScrollIndicator={false}
        
        // 1. Botão Fechado com Text Nativo
        renderButton={(selectedItem) => (
          <View style={styles.dropdownButton}>
            {selectedItem && (
              <Ionicons name={selectedItem.icon as any} size={22} color="#333" style={styles.buttonIcon} />
            )}
            
            <Text
              style={selectedItem ? styles.selectedText : styles.placeholderText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {selectedItem ? selectedItem.label : 'Selecione...'}
            </Text>
            
            <Ionicons name="chevron-down" size={20} color="#666" />
          </View>
        )}

        // 2. Itens da Lista com Text Nativo
        renderItem={(item, index, isSelected) => {
          const isEven = index % 2 === 0;

          return (
            <View
              style={[
                styles.dropdownItem,
                { backgroundColor: isEven ? '#F8F9FA' : '#FFFFFF' },
                isSelected && { backgroundColor: '#E0E7FF' },
              ]}
            >
              <Ionicons name={item.icon as any} size={20} color="#444" style={styles.itemIcon} />
              
              <Text 
                style={styles.dropdownItemText} 
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.label}
              </Text>
            </View>
          );
        }}
        dropdownStyle={styles.dropdownMenu}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdownButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColors.input.border || '#CCC',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 8,
  },
  placeholderText: {
    flex: 1,
    fontSize: 18,
    color: appColors.input.placeholder || '#999',
  },
  selectedText: {
    flex: 1,
    fontSize: 18,
    color: '#333333',
    fontWeight: '500',
  },
  dropdownMenu: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  dropdownItem: {
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 10,
  },
  dropdownItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
});