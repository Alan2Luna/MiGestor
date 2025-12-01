import { api } from "../lib/api-client";
import { type ApiResponse } from "../types/api";
import type { User } from "../types/User";


export async function getUsers(): Promise<User[]> {
  try {
    const response = await api.get<ApiResponse<User[]>>("/users?page=" + 1) ;

    return response.data;
  } catch(e) {
    console.error(e);
    return []
  }
}