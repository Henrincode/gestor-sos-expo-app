import { API_URL } from "@/CONSTANTS"
import { Return } from "@/types/api"


type Company = {
  id: number
  name: string
}

async function findAll(): Return<Company[]> {
  try {
    // envia email e senha para fazer login
    const response = await fetch(`${API_URL}/companies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await response.json()

    return result

  } catch (error) {
    console.error("ERROR services/companies.findAll:", error)
    return { message: "Erro de conexão com API." }
  }
}


async function create(name: string) {

}

const companiesService = {
  findAll,
  create
}

export default companiesService