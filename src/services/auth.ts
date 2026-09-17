import { API_URL, STORAGE_LOGGED } from '@/CONSTANTS';
import { Return } from '@/types/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Login = {
  email: string
  password: string
}

type CheckReturn = {
  id: number,
  name: string,
  email_id: number,
  email: string
}

type FormCreate = {
  name: string
  email: string
  password: string
}

// ----------
// login
// ----------
async function login(params: Login): Return<{ token: string }> {
  try {
    // verifica se os campos existem
    const { email, password } = params

    if (!email || !password) {
      return {
        message: 'Informação faltando',
        errors: {
          ...(!email && { email: ["E-Mail esta em branco"] }),
          ...(!password && { password: ["Senha esta em branco"] })
        }
      }
    }

    // envia email e senha para fazer login
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    // se o login for success salva estado no storage
    if (response.status === 201) {
      await AsyncStorage.setItem(STORAGE_LOGGED, "true")
    }

    const result: { data: { token: string } } = await response.json()
    return result

  } catch (error) {
    console.error("ERROR services/auth.login:", error)
    return { message: "Erro de conexão com API." }
  }
}

// ----------
// create
// ----------
const create = async (params: FormCreate): Return<{
  id: string
  name: string
  emails: {
    primary: boolean
    email: string
  }[]
  token: string
}> => {
  try {
    // verifica se os campos existem
    const { name, email, password } = params

    if (!name || !email || !password) {
      return {
        message: "Campo/s inválidos",
        errors: {
          ...(!name && { name: ["Campo ausente"] }),
          ...(!email && { email: ["Campo ausente"] })
        }
      }
    }

    // envia email e senha para criar usuário
    const response = await fetch(`${API_URL}/auth/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })

    const result = await response.json()

    // se email já estiver cadastrado
    if (response.status === 409) return {
      message: "E-Mail já cadastrado.",
      errors: { email: ["E-Mail já cadastrado."] }
    }

    // se resposta for false
    if (!response.ok) {
      return {
        message: "Erro de conexão com API.",
        errors: { api: ["Erro interno, tente mais tarde!"] }
      }
    }

    // configura storage para logado
    await AsyncStorage.setItem(STORAGE_LOGGED, "true")

    return result

  } catch (error) {
    console.log("ERROR services/auth.create:", error)
    return {
      message: "Erro de conexão com API.",
      errors: { api: ["Erro interno, tente mais tarde!"] }
    }
  }
}

const logout = async () => {

  try {
    // faz logout
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    // se api responder true remove o storage logged
    if (response.ok) {
      await AsyncStorage.removeItem(STORAGE_LOGGED)
      return true
    }

    return false

  } catch (error) {
    console.log("ERROR services/auth.logout:", error)
    return {
      message: "Erro de conexão com API.",
      errors: { api: ["Erro interno, tente mais tarde!"] }
    }
  }
}

const auth = {
  login,
  create,
  logout
}

export default auth