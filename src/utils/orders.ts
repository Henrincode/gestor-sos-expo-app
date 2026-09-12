import { API_URL } from "@/CONSTANTS";
import { OrderList } from "@/types/orders";

type Return = Promise<{
  ok: true
  data: OrderList[]
} | {
  ok: false
  message: string
}>

// ----------
// GET LIST BY COMPANY
// ----------
async function getListByCompany(company_id: number): Return {
  try {
    const response = await fetch(API_URL + "/api/company/" + company_id + "/order/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        company_id
      })
    })

    const data: OrderList[] = await response.json()

    return { ok: true, data }

  } catch (error) {
    console.error(error)
    return { ok: false, message: "Erro de conexão" }
  }
}

// ----------
// GET ORDER BY ID
// ----------
async function getById(id: number): Return {
  try {
    const response = await fetch(API_URL + "/company/order/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })

    const data = await response.json()

    return { ok: true, data }

  } catch (error) {
    console.error("ERROR order.getById():", error)
    return { ok: false, message: "erro de conexão" }
  }
}

// ----------
// CREATE ORDER
// ----------
async function create(p: { name: string }): Return {
  try {

  } catch (error) {
    console.error("ERROR order.create():", error)
  }
}