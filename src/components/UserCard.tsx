import type { User } from "@/types/User";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router";

interface Props {
  user: User;
  index: number;
}

export function UserCard({ user, index }: Props) {
  const { id, first_name, last_name, email, avatar } = user;
  const navigate = useNavigate();

  const navigateToUserDetail = () => {
    navigate(`/user/${id}`);
  }

  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <Card 
          className="cursor-pointer transition-all duration-300 border-border/50 bg-card/80 shadow-card hover:scale-105 hover:shadow-elegant backdrop-blur-3xl"
          onClick={navigateToUserDetail}
        >
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-18 w-18 border-2 border-primary/20">
                <AvatarImage src={avatar} alt="" />
                <AvatarFallback className="font-bold text-xl bg-primary/10 text-primary">
                  {first_name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg mb-1">
                  {first_name} {last_name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {email}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
  )
}