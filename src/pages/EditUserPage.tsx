import { useNavigate, useParams } from "react-router"
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EditForm } from "@/components/EditForm";


export function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/user/${id}`)
  }

  return(
    <div className="min-h-screen">
      <div className="container max-w-3xl mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="ghost"
            onClick={goBack}
            className="mb-4 cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Editar Usuario</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <EditForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}