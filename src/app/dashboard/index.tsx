import Input from "@/components/Form/Input";
import Scroll from "@/components/Scroll";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Index() {
  return (
    <Scroll nav style={styles.container}>
      {/* <View style={{backgroundColor: 'red'}}> */}
      <Input value="" setValue={() => { }} />
        {Array.from({ length: 110 }, (_, i) => (
          <Text key={i}>{i}</Text>
        ))}
      {/* </View> */}
    </Scroll>
  )
}