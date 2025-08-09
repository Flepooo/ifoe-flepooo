"use server"

import { getAuthorizationToken } from "./app"
import { actionResponse, defaultHeaders } from "@/lib/utils"

import { APIResponse, Applicant, PaginatedData } from "@/types"
import { API_URL } from "@/lib/constants"
import { build } from "search-params"
import { revalidatePath } from "next/cache"
import { adminRoutes } from "@/lib/routes"

export async function getApplicants(searchParams: Record<string, string> = {}) {
  try {
    const token = await getAuthorizationToken()
    const sp = build(searchParams)
    const messages = await fetch(`${API_URL}/applicants?${sp}`, {
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    const data: APIResponse<PaginatedData<Applicant[]>> = await messages.json()
    return data.data
  } catch (error) {
    console.log({ error })
  }
}

export async function getAllApplicants() {
  try {
    const token = await getAuthorizationToken()
    const res = await fetch(`${API_URL}/applicants/export`, {
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    const data = (await res.json()) as APIResponse<Applicant[]>
    return data.data
  } catch (error) {
    const err = error as APIResponse<any>
    throw new Error(err?.message || "Failed to fetch applicants")
  }
}

export async function deleteApplicantAction(categoryId: number) {
  try {
    const token = await getAuthorizationToken()

    const response = await fetch(`${API_URL}/applicants/${categoryId}`, {
      method: "DELETE",
      headers: defaultHeaders({
        Authorization: `Bearer ${token}`
      })
    })
    revalidatePath(adminRoutes.applicants.root)
    const data = await response.json()

    if (!response.ok) {
      return {
        status: response.status,
        message: data?.message || "حدث خطأ ما",
        data: null
      }
    }

    return {
      status: response.status,
      message: "تم حذف القسم بنجاح",
      data: null
    }
  } catch (error) {
    console.log(error)
    return actionResponse("حدث خطأ ما", 500, null)
  }
}
