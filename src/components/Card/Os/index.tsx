import Icon from "@/components/Icon";
import tw from "@/styles/tailwindColors";
import { StyleSheet, Text, View } from "react-native";

const STATUS_LIST = {
  pending: {
    name: 'Pendente',
    color: tw.blue['600']
  },
  in_progress: {
    name: 'Em Progresso',
    color: tw.orange['600']
  },
  completed: {
    name: 'Concluído',
    color: tw.green['600']
  }
} as const

interface Props {
  status: keyof typeof STATUS_LIST
}

export default function CardOS({ status = 'pending' }: Props) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {/* bar */}
        <View style={styles.bar}></View>
        {/* content */}
        <View style={styles.content}>
          {/* top */}
          <View style={styles.top}>
            <Text style={styles.id}>OS #00001</Text>
            <Text
              style={[
                styles.id,
                {
                  color: STATUS_LIST[status].color,
                  backgroundColor: STATUS_LIST[status].color + '20'
                }
              ]}
            >
              {STATUS_LIST[status].name}
            </Text>
          </View>
          {/* main */}
          <View style={styles.main}>
            {/* icon */}
            <View style={styles.iconContent}>
              <Icon name='hammer-screwdriver' size={36} color={tw.blue['950']} />
            </View>
            {/* texts */}
            <View>
              <Text style={styles.title}>Manutenção do ar-condicionado</Text>
              <Text style={styles.local}>Auditório Principal</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.bottom}>
            <View style={styles.bottonText}>
              <Icon name="calendar-blank" size={styles.bottonText.fontSize} />
              <Text style={styles.bottonText}>10/08/2026</Text>
              <Text style={styles.bottonText}>•</Text>
              <Text style={styles.bottonText}>Prioridade NORMAL.</Text>
            </View>
            <Icon name="chevron-right" size={styles.bottonText.fontSize} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
    borderRadius: 6,
    backgroundColor: 'white',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.10)'
  },
  bar: {
    width: 10,
    backgroundColor: tw.blue['200']
  },
  content: {
    flex: 1,
    gap: 10,
    padding: 10
  },
  main: {
    flexDirection: 'row',
    gap: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  id: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: tw.neutral['950'] + '20'
  },
  status: {},
  iconContent: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: tw.blue['200']
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: tw.neutral['800']
  },
  local: {
    fontSize: 14,
    fontWeight: 'light',
    color: tw.neutral['800']
  },
  line: {
    height: 2,
    borderRadius: 999,
    backgroundColor: tw.blue['50']
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottonText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    fontSize: 14
  }
})