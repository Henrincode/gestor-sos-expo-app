import { router, usePathname } from "expo-router"
import { useEffect } from "react"
import { BackHandler, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import NavBarButton from "./NavBarButton"
import styles from "./styles"

export default function NavBar() {

  const insets = useSafeAreaInsets()
  const path = usePathname()

  useEffect(() => {
    const onBackPress = () => {
      // 1. Se estiver na tela principal do dashboard, fecha o app
      if (path === "/dashboard" || path === "/dashboard/") {
        BackHandler.exitApp()
        return true // Bloqueia o comportamento padrão
      }

      // 2. Se estiver nas telas raiz "new" ou "settings", volta para o dashboard
      if (path === "/dashboard/new" || path === "/dashboard/settings") {
        router.replace("/dashboard")
        return true // Bloqueia o comportamento padrão
      }

      // 3. Subtelas (ex: /dashboard/settings/security) usam o retorno nativo padrão
      return false
    }

    // Registra o listener do botão de voltar
    const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress)

    return () => subscription.remove()
  }, [path])

  return (
    <View style={[styles.navBar, { marginBottom: insets.bottom + 10 }]}>
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
  )
}