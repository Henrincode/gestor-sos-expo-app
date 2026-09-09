import { API_URL } from '@/CONSTANTS'
import * as SecureStore from 'expo-secure-store'

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
    return { success: false, message: 'Nenhum dado foi enviado' }
  }

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

  // trata os dados e procura erros
  if (!response.ok) {
    return { success: false, message: 'Erro interno do servidor.' }
  }

  const data = await response.json()

  if (!data.success) {
    return data
  }

  // salva o token e retorna true
  await SecureStore.setItemAsync('auth_token', data.token)

  return { success: true, message: 'Login realizado com sucesso!' }
}

const create = (form: FormCreate) => { }

// // ----------
// // check
// // ----------
// const check = async () => {
//   // recupera o token e faz validação
//   const auth_token = await SecureStore.getItemAsync('auth_token')

//   const response = await fetch(`${API_URL}/auth`, {
//     method: "POST",
//     headers: {
//       "Content-Type": 'application/json',
//       "auth_token": `${auth_token}`
//     },
//     credentials: "omit" // rejeita os cookies que o servidor envia no header
//   })

//   // trata os dados e procura erros
//   if(!response.ok){
//     return {success: false, message: "Erro interno do servidor."}
//   }

//   const data = await response.json()

//   if(data.success) {
//     return null
//   }

//   // se estiver tudo ok retorna o usuário do token
//   return data.user
// }

const auth = {
  login,
  // check
}

export default auth