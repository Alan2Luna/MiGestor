import { cn } from "@/lib/utils";
import { ErrorMessage, } from "@hookform/error-message";
import type { FieldErrors } from "react-hook-form";

interface Props {
  name: string;
  errors: FieldErrors;
  className?: string;
}

export function InputError({ name, errors, className }: Props) {
  return (
    <ErrorMessage
      name={name} 
      errors={errors} 
      render={({ message }) => (
        <p className={cn("text-red-400 text-sm -mt-1", className)}>{message}</p>
      )}
    />
  )
}