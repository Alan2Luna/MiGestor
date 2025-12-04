import { motion } from "motion/react"
import { UserCard } from "@/components/UserCard";
import { useUsers } from "@/hooks/useUsers";

export function HomePage() {
  const { usersQuery } = useUsers();

  if(usersQuery.isLoading) {
    return <p>Loading...</p>
  }

  return(
    <div className="min-h-screen bg-linear-150 from-white to-cyan-50/20">
      <div className="container mx-auto p-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-primary">Gestión de Usuarios</h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {usersQuery.data?.map((user, index) => (
            <UserCard key={user.id} user={user} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}