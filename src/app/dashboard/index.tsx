import Input from "@/components/Form/Input";
import Scroll from "@/components/Scroll";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Index() {
  return (
    <Scroll nav style={styles.container}>
      {/* <View style={{backgroundColor: 'red'}}> */}
        {Array.from({ length: 60 }, (_, i) => (
          <Text key={i}>{i}</Text>
        ))}
        <Input value="" setValue={() => { }} />
      {/* </View> */}
    </Scroll>
  )
}