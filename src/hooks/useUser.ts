import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../services";


export function useUser(id?: number) {

  const userQuery = useQuery({
    queryKey: ["user", id!],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
  
      return getUserById(id as number)
    },
    staleTime: 1000 * 60 * 60,
  });

  return {
    userQuery,
  }
}