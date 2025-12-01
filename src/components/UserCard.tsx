import type { User } from "@/types/User";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  user: User;
  index: number;
}

export function UserCard({ user, index }: Props) {
  const { id, first_name, last_name, email, avatar } = user;

  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <Card 
          className="cursor-pointer transition-all duration-300"
          onClick={() => console.log(id)}
        >
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-18 w-18 border-2">
                <AvatarImage src={avatar} alt="" />
                <AvatarFallback className="font-bold text-xl">
                  {first_name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg mb-1">
                  {first_name} {last_name}
                </h3>
                <p className="text-sm mb-2">
                  {email}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
  )
}