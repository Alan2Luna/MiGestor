import { motion } from "motion/react"
import { useUsers } from "@/hooks/useUsers";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { ModalFallback } from "@/components/ModalFallback";
import { UserList } from "@/components/UserList";
import { Spinner } from "@/components/ui/spinner";

const CreateUserDialog = lazy(() =>
  import("@/components/CreateUserDialog").then((module) => ({ 
    default: module.CreateUserDialog,
  }))
);

export function HomePage() {
  const { usersQuery } = useUsers();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(prev => !prev)
  }

  if(usersQuery.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-150 from-white to-cyan-50">
        <Spinner className="size-20 text-primary"/>
      </div>
    )
  }

  return(
    <div className="min-h-screen bg-linear-150 from-white to-cyan-50">
      <div className="container mx-auto p-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-primary">Gestión de Usuarios</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-8 flex justify-end"
        >
          <Button className="shadow-elegant whitespace-nowrap text-white cursor-pointer" onClick={toggleDialog}>
            <Plus className="mr-2 h-4 w-4"/>
            Nuevo Usuario
          </Button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <UserList users={usersQuery.data} />
        </div>
      </div>
      {
        isDialogOpen && (
          <Suspense fallback={<ModalFallback />}>
            <CreateUserDialog isOpen={isDialogOpen} onOpenChange={toggleDialog}/>
          </Suspense>
        )
      }
    </div>
  )
}