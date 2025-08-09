"use server";

import { getAuthorizationToken } from "./app";
import { defaultHeaders } from "@/lib/utils";

import { APIResponse, ContactMessage, PaginatedData } from "@/types";
import { API_URL } from "@/lib/constants";

export async function getAllMessages() {
  const token = await getAuthorizationToken();
  const messages = await fetch(`${API_URL}/messages`, {
    headers: defaultHeaders({
      Authorization: `Bearer ${token}`
    })
  });
  const data: APIResponse<PaginatedData<ContactMessage[]>> = await messages.json();
  return data.data;
}
