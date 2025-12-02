import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services";

export function useUsers() {

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 60, // 1 hora
  })

  return {
    usersQuery,
  }
}