import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Edit, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Detail() {
  const { id } = useParams();
  const { userQuery } = useUser(Number(id));
  const navigation = useNavigate();

  const goBack = () => {
    navigation("/");
  }

  if(!id) {
    return (<div>Nada</div>)
  }

  if(userQuery.isLoading) {
    return(<p>Loading...</p>)
  }

  return (
    <div className="min-h-screen">
      <div className="container max-w-4xl mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button variant="ghost" onClick={goBack}>
            <ArrowLeft />
            Volver
          </Button>
        </motion.div>
        <Card>
          <div />
        <CardContent className="p-8 -mt-16">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-32 w-32 border-4 border-card shadow-elegant">
              <AvatarImage src={userQuery.data?.avatar} alt="" />
              <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                {userQuery.data?.first_name}{userQuery.data?.last_name}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 pt-16 md:pt-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{userQuery.data?.first_name} {userQuery.data?.last_name}</h1>
                </div>
                <Button
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Editar
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium">{userQuery.data?.email}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </CardContent>
        </Card>
      </div>
    </div>
  )
}