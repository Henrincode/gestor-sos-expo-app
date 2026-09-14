import Button from "@/components/Button";
import Scroll from "@/components/Scroll";
import styles from "./styles";
import auth from "@/utils/auth";

export default function Settings() {

const logout = async () => {
  const data = await auth.logout()
  console.log("logout no frontend", data)
}

  return (
    <Scroll safeArea nav style={styles.container}>
      <Button onPress={logout} width="80%" text="Sair / Logout" />
    </Scroll>
  )
}