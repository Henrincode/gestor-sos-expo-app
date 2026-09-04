import Button from "@/components/Button";
import ProfileMini from "@/components/Profile/Mini";
import Scroll from "@/components/Scroll";
import tw from "@/styles/tailwindColors";
import { Text, View } from "react-native";
import styles from "./styles";

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

const PARTICIPANTES = [
  {
    id: '249658',
    nome: 'Fulano Silva',
    setor: 'Eletricista',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMS7nh6whwoyLKBSndSH9-EaD1rnCooTBV2iUaAaeLbQ&s=10'
  },
  {
    id: '7564',
    nome: 'João Lopes',
    setor: 'Eletricista',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CsPL-CjP5fagDdznpG5FA-EY0bDn6QFrHTl1qfJjRg&s=10'
  },
]

const ATT = [
  {
    created: '15/06/2026',
    our: '08',
    min: '32',
    usuario: 'Fulano Silva',
    title: 'Pessoas para resolver',
    desc: 'Para este empenho foram chamados os colaboradores João e Fulano, ambos eletricistas, primeiramente estarão analisando o problema e em breve darão mais detalhes.'
  },
  {
    created: '15/06/2026',
    our: '08',
    min: '32',
    usuario: 'João Lopes',
    title: 'Encontrada fonte do problema',
    desc: 'Fui informado que o problema é no DR que já não esta mais segurando carga, será solicitado a compra de um novo DR.'
  },
  {
    created: '15/06/2026',
    our: '08',
    min: '32',
    usuario: 'João Lopes',
    title: 'Substituição do DR',
    desc: 'Realizado a troca para o novo DR, feito diversos testes e o problema foi resolvido.'
  }
]

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
    <Scroll safeArea nav style={styles.container}>

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

      {/* Resolvendo */}
      <View style={styles.box}>
        {/* title, participe */}
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={{ fontSize: 20 }}>
            Resolvendo
          </Text>

          <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8, borderRadius: 999, backgroundColor: tw.blue['500'] }}>
            <Text style={{ color: 'white', fontSize: 12 }}>
              Participar
            </Text>
          </View>
        </View>

        {PARTICIPANTES.map((p, i) => (
          <ProfileMini
            key={i}
            id={p.id}
            name={p.nome}
            sector={p.setor}
            img={p.image}

          />
        ))}
      </View>

      <View style={styles.box}>
        <Text style={{ fontSize: 20 }}>
          Comentários e atividades
        </Text>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ width: 10, borderRadius: 999, backgroundColor: tw.blue['300'] }} />
          <View style={{ flex: 1 }}>
            {ATT.map((a, i) => (
              <View key={i} style={{ paddingVertical: 20 }}>
                {/* usuario */}
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{a.usuario}</Text>
                {/* data */}
                <Text style={{ fontSize: 12 }}>
                  {a.created} • {a.our}h{a.min}m
                </Text>
                {/* title */}
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {a.title}
                </Text>
                {/* desc */}
                <Text style={{ fontSize: 14 }}>
                  {a.desc}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={[styles.box, { flexDirection: 'row' }]}>
        <Button text="Atualizar" flex />
        <Button text="Finalizar" type="success" flex />
      </View>

    </Scroll>
  )
}