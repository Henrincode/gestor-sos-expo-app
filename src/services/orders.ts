import { API_URL } from "@/CONSTANTS";
import { Return } from "@/types/api";
import { OrderList } from "@/types/orders";

// ----------
// GET LIST BY COMPANY
// ----------
async function getListByCompany(company_id: number): Return<OrderList[]> {
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

    return {
      ok: true,
      message: `Consulta no banco realizada com sucesso, ${data.length} registros encontrados`,
      data
    }

  } catch (error) {
    console.log("ERROR order.ts GET", error)
    return { ok: false, message: "Erro de conexão" }
  }
}

// ----------
// GET ORDER BY ID
// ----------
async function getById(id: number): Return<any> {
  try {
    const response = await fetch(API_URL + "/company/order/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })

    const data = await response.json()

    return { ok: true, message: "Consulta realizada com sucesso.", data }

  } catch (error) {
    console.error("ERROR order.getById():", error)
    return { ok: false, message: "erro de conexão" }
  }
}

// ----------
// CREATE ORDER
// ----------
// async function create(p: { name: string }): Return {
//   try {

//   } catch (error) {
//     console.error("ERROR order.create():", error)
//   }
// }