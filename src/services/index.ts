import { api } from "@/lib/api-client";
import { type ApiUserResponse, type ApiUsersResponse } from "@/types/api";
import type { User } from "@/types/User";
import type { UserForm } from "@/types/UserForm";


export async function getUsers(page: number): Promise<ApiUsersResponse<User[]>> {
  try {
    const response = await api.get<ApiUsersResponse<User[]>>("/users?page=" + page);

    return response;
  } catch(e) {
    console.error(e);
    throw Error("Error cargando usuarios")
  }
}

export async function getUserById(id: number): Promise<User> {
  try {
    const response = await api.get<ApiUserResponse>("/users/" + id);
    return response.data;
  } catch (e) {
    console.error(e);
    throw Error("Error obteniendo usuario por id")
  }
}

export async function createUser(body: UserForm) {
  try {
    console.log("USUARIO CREADO: ", body);
  } catch (e) {
    console.error(e)
    throw Error("Error creando usuario");
  }
}

export async function updateUser(id: number, body: UserForm) {
  try {
    await api.patch("/users/" + id, body);
  } catch(error) {
    console.error(error);
    throw Error("Error actualizando usuario")
  }
}