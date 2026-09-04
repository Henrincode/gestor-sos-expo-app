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
        text="Empresa"
        icon={path === '/dashboard/firm' ? 'business' : 'business-outline'}
        active={path === '/dashboard/firm'}
        onPress={() => path !== '/dashboard/firm' && router.push('/dashboard/firm')}
      />

      <NavBarButton
        text="Ordens"
        icon={path === '/dashboard' ? 'document-text' : 'document-text-outline'}
        active={path === '/dashboard'}
        onPress={() => path !== '/dashboard' && router.push('/dashboard')}
      />

      <NavBarButton
        text="Nova OS"
        icon={path === '/dashboard/new' ? 'add-circle' : 'add-circle-outline'}
        active={path === '/dashboard/new'}
        onPress={() => path !== '/dashboard/new' && router.push('/dashboard/new')}
      />

      <NavBarButton
        text="Perfil"
        icon={path === '/dashboard/settings' ? 'person' : 'person-outline'}
        active={path === '/dashboard/settings'}
        onPress={() => path !== '/dashboard/settings' && router.push('/dashboard/settings')}
      />
    </View>
  )
}