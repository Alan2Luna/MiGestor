import { UserCard } from "@/components/UserCard";
import { useUsers } from "@/hooks/useUsers";

export function Home() {
  const { usersQuery } = useUsers();

  if(usersQuery.isLoading) {
    return <p>Loading...</p>
  }

  return(
    <div className="min-h-screen bg-gradient-subtle">
      <div className="mb-4">
        <h1 className="font-bold text-3xl">Gestión de Usuarios</h1>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usersQuery.data?.map((user, index) => (
            <UserCard key={user.id} user={user} index={index} />
          ))}
        </div>
    </div>
  )
}