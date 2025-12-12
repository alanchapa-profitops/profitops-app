import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              🚀 ProfitOps React - En Desarrollo
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p>Migración de HTML a React completada exitosamente!</p>
            <p>Arquitectura de componentes: Input, Button, Card, Badge</p>
            <Button>Componente de Prueba</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
