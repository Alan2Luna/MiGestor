import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputError } from "./InputError";
import { userFormSchema, type UserForm } from "@/types/UserForm";
import { useUserMutation } from "@/hooks/useUserMutation";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export function CreateUserDialog({ isOpen, onOpenChange }: Props) {
  const { createUserMutation } = useUserMutation();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userFormSchema),
  });

  const handleOnSubmit = (formData: UserForm) => {
    createUserMutation.mutate(formData);
    onOpenChange()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-muted border border-border">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-2xl">Crear Nuevo Usuario</DialogTitle>
          <DialogDescription>Completa la información del nuevo usuario</DialogDescription>
        </DialogHeader>
        <form className="p-6 space-y-4 overflow-y-auto text-muted-foreground border-t border-border text-sm" onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="first_name" className="text-black">Nombre:</Label>
            <Input {...register("first_name")} />
            <InputError name="first_name" errors={errors} />
          </div>
          <div className="space-y-2">
            <Label className="text-black">Apellido:</Label>
            <Input {...register("last_name")} />
            <InputError name="last_name" errors={errors} />
          </div>
          <div className="space-y-2">
            <Label className="text-black">Email:</Label>
            <Input {...register("email")} />
            <InputError name="email" errors={errors} />
          </div>
          <div className="flex gap-8 mt-10 -mb-4">
            <Button type="submit" className="flex-1 text-white">
              Crear Usuario
            </Button>
            <Button type="button" className="flex-1 bg-white border hover:bg-white" onClick={onOpenChange}>
              Cancelar
            </Button>
          </div>
        </form>
      </DialogContent>  
    </Dialog>
  )
}