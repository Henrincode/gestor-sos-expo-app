import appColors from '@/styles/appColors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const setoresData = [
  { label: 'Recursos Humanos', value: '1', icon: 'people-outline' },
  { label: 'Financeiro e Controladoria', value: '2', icon: 'cash-outline' },
  { label: 'Tecnologia da Informação e Comunicação', value: '3', icon: 'hardware-chip-outline' },
  { label: 'Marketing e Comunicação', value: '4', icon: 'home' },
  { label: 'Pesquisa e Desenvolvimento', value: '5', icon: 'flask-outline' },
];

interface Props {
  data?: {
    label: string
    value: number
    icon?: string
  },
  title?: string
  placeHolder?: string
}

export default function Select({data, title = 'Selecione o item', placeHolder = "Selecione..."}: Props) {
  const [selectedItem, setSelectedItem] = useState<{ label: string; value: string; icon: string } | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (item: typeof setoresData[0]) => {
    setSelectedItem(item);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Botão do Campo */}
      <TouchableOpacity
        style={styles.dropdownButton}
        activeOpacity={0.7}
        onPress={() => setModalVisible(true)}
      >
        {selectedItem && (
          <Ionicons name={selectedItem.icon as any} size={22} color="#333" style={styles.buttonIcon} />
        )}

        <Text
          style={selectedItem ? styles.selectedText : styles.placeholderText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {selectedItem ? selectedItem.label : placeHolder}
        </Text>

        <Ionicons name="chevron-down" size={20} color="#666" />
      </TouchableOpacity>

      {/* Modal Centralizado */}
      <Modal
        statusBarTranslucent={true}
        navigationBarTranslucent={true}
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          {/* Evita fechar o modal ao clicar dentro do conteúdo */}
          <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
            <Text style={styles.modalTitle}>{title}</Text>

            <FlatList
              data={setoresData}
              keyExtractor={(item) => item.value}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                const isEven = index % 2 === 0;
                const isSelected = selectedItem?.value === item.value;

                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => handleSelect(item)}
                    style={[
                      styles.dropdownItem,
                      { backgroundColor: !isEven ? '#f3f3f3' : '#FFFFFF' },
                      isSelected && { backgroundColor: '#E0E7FF' },
                    ]}
                  >
                    {item?.icon && <Ionicons name={item.icon as any} size={20} color="#444" style={styles.itemIcon} />}
                    <Text
                      style={styles.dropdownItemText}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: appColors.input.border,
    backgroundColor: 'white',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
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
  // Estilos do Modal Centralizado
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  modalContent: {
    width: '90%',
    maxHeight: '60%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  modalTitle: {
    fontSize: 16,
    textAlign: 'center',
    // backgroundColor: 'red',
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 3,
    borderBottomColor: '#EEEEEE',
    // marginBottom: 4,
  },
  dropdownItem: {
    width: '100%',
    height: 52,
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