import { API_URL, STORAGE_LOGGED } from '@/CONSTANTS';
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
async function login(params: Login) {
  if (!params) {
    return { ok: false, message: 'Nenhum dado foi enviado' }
  }

  try {
    const { email, password } = params

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

    if (response.status === 200) {
      await AsyncStorage.setItem(STORAGE_LOGGED, "true")
    }

    const data = await response.json()
    return { ok: response.ok, message: data.message }

  } catch (error) {
    console.error("ERROR AUTH LOGIN:", error)
    return { ok: false, message: "Erro de conexão" }
  }
}

// ----------
// create
// ----------
const create = async (form: FormCreate) => {

  if (!form) {
    return {
      success: false, message: "Erro ao fazer login"
    }
  }

  // envia email e senha para criar usuário
  const response = await fetch(`${API_URL}/auth/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  })

  if (!response.ok) return {
    success: false, message: "Erro ao se conectar com o servidor"
  }

  const data = await response.json()

  console.log(data)

  return data

}

const logout = async () => {

  // faz logout
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })

  // método não suportado
  if (response.status === 405) {
    console.log("ERROR AUTH LOGOUT: 405 método não suportado pela rota API")
    return { ok: response.ok, message: "405 método não suportado pela rota API" }
  }

  // pega dados da requisição
  const data = await response.json()

  if (response.ok) {
    await AsyncStorage.removeItem(STORAGE_LOGGED)
  }

  return { ok: response.ok, data }
}

const auth = {
  login,
  create,
  logout
}

export default auth