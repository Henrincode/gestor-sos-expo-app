import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 20
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  itemAdd: {
    width: "30%",
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: '#BBB',
    borderStyle: 'dashed',
    backgroundColor: '#F7FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 4, // Previne que o texto cole nas bordas
  },
  addText: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
  },
  item: {
    width: 'calc(33.333% - 8px)' as any,
    aspectRatio: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default styles