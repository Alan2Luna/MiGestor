import type { User } from "@/types/User";
import { UserCard } from "./UserCard";

interface Props {
  users: User[] | undefined;
}

export function UserList({ users }: Props) {

  if(!users || users.length === 0) {
    return (
      <p>No hay usuarios registrados en este momento.</p>
    )
  }

  return users.map((user, index) => (
    <UserCard key={user.id} user={user} index={index} />
  ));
}