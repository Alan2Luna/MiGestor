import { useForm } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { z } from "zod";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useLocation } from "react-router";
import { Button } from "./ui/button";
import { Save } from "lucide-react";
import { ErrorMessage } from "@hookform/error-message";

const schema = z.object({
  email: z.email({ message: "Por favor, ingresa un correo electrónico válido."} ), 
  first_name: z.string().min(1, { message: 'Por favor, ingresa un nombre.' }),
  last_name: z.string().min(1, { message: "Por favor, ingresa un apellido."}),
});

type UserSchema = z.infer<typeof schema>;

export function EditForm() {
  const location = useLocation();
  const { email, first_name, last_name } = location.state || {};
  const { handleSubmit, register, formState: { isDirty, errors } } = useForm({
    defaultValues: { email, first_name, last_name },
    resolver: zodResolver(schema),
  });

  const handleOnSubmit = (formData: UserSchema) => {
    console.log(formData)
  }

  return(
    <form className="space-y-6" onSubmit={handleSubmit(handleOnSubmit)}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-2"
      >
        <Label htmlFor="first_name">Nombre</Label>
        <Input {...register("first_name")} />
        <ErrorMessage name="first_name" errors={errors} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        className="space-y-2"
      >
        <Label htmlFor="last_name">Apellido</Label>
        <Input {...register("last_name")} />
        <ErrorMessage name="last_name" errors={errors}/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <Label htmlFor="email">Email</Label>
        <Input {...register("email")} />
        <ErrorMessage name="email" errors={errors}/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="flex gap-3 pt-4"
      >
        <Button type="submit" className="flex-1 cursor-pointer shadow-elegant text-white" disabled={!isDirty}>
          <Save className="mr-2 h-4 w-4" />
          Guardar Cambios
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex-1"
        >
          Cancelar
        </Button>
      </motion.div>
    </form>
  );
}