import { createUser, updateUser } from "@/services";
import type { UserForm } from "@/types/UserForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUserMutation(id?: number) {
  const queryClient = useQueryClient();

  const createUserMutation = useMutation({
    mutationFn: async (formData: UserForm) => createUser(formData),
    onSuccess: () => {
      toast.success("Se ha creado un usuario exitosamente.")
      queryClient.invalidateQueries({
        queryKey: ["users"],
      })
    }
  })

  const userMutation = useMutation({
    mutationFn: async (formData: UserForm) => updateUser(id!, formData),
    onSuccess: () => {
      toast.success("El recurso se ha actualizado exitosamente.")
      queryClient.invalidateQueries({
        queryKey: ["user", id]
      })
      queryClient.invalidateQueries({
        queryKey: ["users"]
      })
    },
  });

  return {
    userMutation,
    createUserMutation,
  }
}