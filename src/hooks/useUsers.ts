import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services";

export function useUsers(page: number = 1) {
  const usersQuery = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page),
    staleTime: 1000 * 60 * 60, // 1 hora
  })

  return {
    usersQuery,
  }
}