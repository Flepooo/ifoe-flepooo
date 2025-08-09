"use server"

import { API_URL, AUTH_COOKIE_NAME, LANGUAGE_COOKIE_NAME } from "@/lib/constants"
import { ContactSchema, ExibitionFormSchema } from "@/lib/schema"
import { actionResponse, defaultHeaders } from "@/lib/utils"
import { APIResponse, Language, Role } from "@/types"
import { cookies } from "next/headers"
import { z } from "zod"

export const getLanguage = async (): Promise<Language> => {
  const cookiesStore = cookies()
  const value = (await cookiesStore).get(LANGUAGE_COOKIE_NAME)?.value
  const language = value ? value : "ar"
  return language as Language
}

export const getAuthorizationToken = async () => {
  const cookiesStore = cookies()
  const token = (await cookiesStore).get(AUTH_COOKIE_NAME)?.value
  const authorization = token ? token : ""

  return authorization
}

export async function sendContactMessageAction(values: z.infer<typeof ContactSchema>) {
  try {
    const response = await fetch(`${API_URL}/messages`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: defaultHeaders()
    })
    const data: APIResponse<null> = await response.json()
    return data
  } catch (error) {
    return actionResponse("Something went wrong, Try again later.", 500)
  }
}

export async function sendApplicantAction(values: z.infer<typeof ExibitionFormSchema>) {
  try {
    const locale = await getLanguage()
    const response = await fetch(`${API_URL}/applicants`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: defaultHeaders({
        "Accept-Language": locale
      })
    })
    const data: APIResponse<null> = await response.json()
    return data
  } catch (error) {
    return actionResponse("Something went wrong, Try again later.", 500)
  }
}

export async function getCounts(): Promise<{
  blogs: number
  franchises: number
  users: number
  partners: number
  attended_applicants: number
  absent_applicants: number
}> {
  try {
    const response = await fetch(`${API_URL}/counts`, {
      method: "GET",
      headers: defaultHeaders()
    })
    const data = await response.json()

    return data
  } catch (error) {
    return {
      blogs: 0,
      franchises: 0,
      users: 0,
      partners: 0,
      attended_applicants: 0,
      absent_applicants: 0
    }
  }
}

export async function getRoles() {
  try {
    const response = await fetch(`${API_URL}/roles`, {
      method: "GET",
      headers: defaultHeaders()
    })
    const data: APIResponse<Role[]> = await response.json()
    return data.data
  } catch (error) {
    return []
  }
}
