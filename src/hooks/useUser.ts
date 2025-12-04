import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserById, updateUser } from "../services";
import type { UserForm } from "@/types/UserForm";

export function useUser(id: number) {
  const queryClient = useQueryClient();

  const userQuery = useQuery({
    queryKey: ["user", id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
  
      return getUserById(id as number)
    },
    staleTime: 1000 * 60 * 60,
  });

  const userMutation = useMutation({
    mutationFn: async (formData: UserForm) => updateUser(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", id]
      })
      queryClient.invalidateQueries({
        queryKey: ["users"]
      })
    },
  });

  return {
    userQuery,
    userMutation
  }
}