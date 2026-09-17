import Button from "@/components/Button";
import Scroll from "@/components/Scroll";
import auth from "@/services/auth";
import { router } from "expo-router";
import styles from "./styles";

export default function Settings() {

  const logout = async () => {
    const data = await auth.logout()
    if (data) router.replace("/")
  }

  return (
    <Scroll safeArea nav style={styles.container}>
      <Button onPress={logout} width="80%" text="Sair / Logout" />
    </Scroll>
  )
}