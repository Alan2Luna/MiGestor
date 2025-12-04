import z from "zod";

export const UserFormSchema = z.object({
  email: z.email({ message: "Por favor, ingresa un correo electrónico válido."} ), 
  first_name: z.string().min(1, { message: 'Por favor, ingresa un nombre.' }),
  last_name: z.string().min(1, { message: "Por favor, ingresa un apellido."}),
});

export type UserForm = z.infer<typeof UserFormSchema>;