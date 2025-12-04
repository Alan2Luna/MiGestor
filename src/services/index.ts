import { api } from "@/lib/api-client";
import { type ApiUserResponse, type ApiUsersResponse } from "@/types/api";
import type { User } from "@/types/User";
import type { UserForm } from "@/types/UserForm";


export async function getUsers(): Promise<User[]> {
  try {
    const response = await api.get<ApiUsersResponse<User[]>>("/users?page=" + 1);

    return response.data;
  } catch(e) {
    console.error(e);
    return []
  }
}

export async function getUserById(id: number): Promise<User> {
  try {
    const response = await api.get<ApiUserResponse>("/users/" + id);
    return response.data;
  } catch (e) {
    console.error(e);
    throw Error(e);
  }
}

export async function updateUser(id: number, body: UserForm) {
  try {
    await api.patch("/users/" + id, body);
  } catch(error) {
    console.error(error);
    throw Error("")
  }
}