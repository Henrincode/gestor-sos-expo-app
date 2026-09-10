import Scroll from "@/components/Scroll";
import { Text } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";

export default function Settings() {


  
  return (
    <Scroll safeArea nav style={styles.container}>
      <Text>
        {'texto'}
      </Text>
    </Scroll>
  )
}