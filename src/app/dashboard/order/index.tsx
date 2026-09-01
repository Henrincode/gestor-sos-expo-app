import Scroll from "@/components/Scroll";
import tw from "@/styles/tailwindColors";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import styles from "./styles";
import ProfileMini from "@/components/Profile/Mini";

const ORDER = {
  title: 'Reparo Elétrico no corredor',
  local: 'Auditório Principal',
  status: 'Pendente',
  createdAt: '15/06/2026',
  desc: 'Todas as tomadas do corredor do auditório principal estão falhando, ao plugar qualquer dispositivos em qualquer uma das tomadas após 5min no máximo o DR do quadro de energia cai',
  solicitatenID: '2589',
  solicitante: 'Fulana Torres',
  solicitanteSetor: 'ADM',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCenmh-mWBY0clquW3dw-sndkUqgHmd5xyNJNPB7tvKw&s=10'

}

export default function Index({
  title = ORDER.title,
  local = ORDER.local,
  status = ORDER.status,
  createdAt = ORDER.createdAt,
  desc = ORDER.desc,
  solicitatenID = ORDER.solicitatenID,
  solicitante = ORDER.solicitante,
  solicitanteSetor = ORDER.solicitanteSetor,
  image = ORDER.image
}) {
  return (
    <Scroll style={styles.container}>

      {/* title */}
      <View style={styles.box}>
        {/* wrapper title */}
        <View>
          <Text style={{ fontSize: 24 }}>
            {title}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'light', color: '#888' }}>
            {local}
          </Text>
        </View>

        {/* date, status */}
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={{ fontSize: 14, color: '#888' }}>
            {createdAt}
          </Text>
          <View style={{ paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999, backgroundColor: tw.orange['600'] + '30' }}>
            <Text style={{ fontSize: 14, color: tw.orange['600'] }}>
              {status}
            </Text>
          </View>
        </View>
      </View>

      {/* descrição */}
      <View style={styles.box}>
        <Text style={{ fontSize: 20 }}>
          Descrição
        </Text>

        <View style={{ padding: 10, borderRadius: 10, backgroundColor: 'white', boxShadow: '0 4px 4px #00000030 ' }}>
          <Text style={{ fontSize: 16 }}>
            {desc}
          </Text>
        </View>

      </View>

      {/* solicitante */}
      <View style={styles.box}>
        <Text style={{ fontSize: 20 }}>
          Solicitante
        </Text>

        <ProfileMini 
        id={solicitatenID}
        name={solicitante}
        sector={solicitanteSetor}
        img={image}
        
         />
      </View>

    </Scroll>
  )
}