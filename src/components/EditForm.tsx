import { useForm } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useLocation, useNavigate, useParams } from "react-router";
import { Button } from "./ui/button";
import { Save } from "lucide-react";
import { ErrorMessage } from "@hookform/error-message";
import { userFormSchema, type UserForm } from "@/types/UserForm";
import { useUserMutation } from "@/hooks/useUserMutation";

export function  EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { userMutation } = useUserMutation(Number(id));

  const { email, first_name, last_name } = location.state || {};
  const { handleSubmit, register, formState: { isDirty, errors } } = useForm({
    defaultValues: { email, first_name, last_name },
    resolver: zodResolver(userFormSchema),
  });

  const goBack = () => {
    navigate(`/user/${id}`);
  }

  const handleOnSubmit = (formData: UserForm) => {
    userMutation.mutate(formData);
    goBack()
  }

  return(
    <form className="space-y-6 text-muted-foreground" onSubmit={handleSubmit(handleOnSubmit)}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-2"
      >
        <Label htmlFor="first_name" className="text-black">Nombre</Label>
        <Input id="first_name" {...register("first_name")} className="border-muted-foreground text-black" />
        <ErrorMessage name="first_name" errors={errors} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        className="space-y-2"
      >
        <Label htmlFor="last_name" className="text-black">Apellido</Label>
        <Input id="last_name" {...register("last_name")} className="border-muted-foreground text-black" />
        <ErrorMessage name="last_name" errors={errors}/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <Label htmlFor="email" className="text-black">Email</Label>
        <Input id="email" {...register("email")} className="border-muted-foreground text-black" />
        <ErrorMessage name="email" errors={errors}/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="flex gap-3 pt-4"
      >
        <Button 
          type="submit"
          className="flex-1 cursor-pointer shadow-elegant text-white" 
          disabled={!isDirty || userMutation.isPending}
        >
          <Save className="mr-2 h-4 w-4" />
          Guardar Cambios
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex-1 text-gray-950 cursor-pointer"
          onClick={goBack}
        >
          Cancelar
        </Button>
      </motion.div>
    </form>
  );
}