import Icon from '@/components/Icon';
import appColors from '@/styles/appColors';
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps, useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const DATA: SelectItem[] = [
  { label: 'Sem itens', value: '0', icon: 'alert-circle' }
]

export interface SelectItem {
  label: string
  value: string
  icon?: ComponentProps<typeof Icon>['name']
  color?: string
}

interface Props {
  data: SelectItem[],
  title?: string
  placeHolder?: string
}

export default function Select({ data = DATA, title = 'Selecione o item', placeHolder = "Selecione..." }: Props) {
  const [selectedItem, setSelectedItem] = useState<SelectItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (item: SelectItem) => {
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
              data={data}
              keyExtractor={(item) => item.value}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                const isEven = index % 2 === 0;
                const isSelected = selectedItem?.value === item.value

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
                    {item?.icon && <Icon name={item.icon} size={20} color={item?.color ? item.color : "#444"} />}
                    <Text
                      style={[styles.dropdownItemText, item?.color ? {color: item.color}: {}]}
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    height: 52,
    paddingHorizontal: 16,
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