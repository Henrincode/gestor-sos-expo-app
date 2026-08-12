import { router, usePathname } from "expo-router"
import { View } from "react-native"
import NavBarButton from "./NavBarButton"
import styles from "./styles"

export default function NavBar() {

  const path = usePathname()

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <NavBarButton
          text="Ordens"
          icon="clipboard-text"
          active={path === '/dashboard'}
          onPress={() => path !== '/dashboard' && router.push('/dashboard')}
        />

        <NavBarButton
          text="Nova OS"
          icon="clipboard-plus"
          active={path === '/dashboard/new'}
          onPress={() => path !== '/dashboard/new' && router.push('/dashboard/new')}
        />

        <NavBarButton
          text="Perfil"
          icon="account"
          active={path === '/dashboard/settings'}
          onPress={() => path !== '/dashboard/settings' && router.push('/dashboard/settings')}
        />
      </View>
    </View>
  )
}