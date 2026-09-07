type Login = {
  email: string
  password: string
}

async function login(params: Login) {
  if(!params) {
    return {success: false, message: 'Nenhum dado foi enviado'}
  }

  const {email, password} = params

  const response = await fetch("http://192.168.15.2:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  const data = await response.json()
  console.log('carregando')
  console.log(data)
}

const auth = {
  login
}

export default auth