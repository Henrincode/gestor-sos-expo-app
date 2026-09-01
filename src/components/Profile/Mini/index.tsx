import { Image } from "expo-image";
import { Text, View } from "react-native";

interface Props {
  id: string
  name: string
  sector: string
  img: string
}



export default function ProfileMini({id, name, sector, img}: Props) {
  return (
    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
      {/* foto */}
      <Image
        source={{ uri: img }}
        style={{ borderRadius: 999, aspectRatio: 1 / 1, width: 80 }}
      />
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          {name}
        </Text>
        <Text style={{ fontSize: 14 }}>
          {sector} • #{id}
        </Text>
      </View>
    </View>
  )
}