"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Guitar, Lock } from "lucide-react"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    // This is a simple mock authentication
    // In a real app, you would validate against a secure backend
    if (username === "admin" && password === "password") {
      // Redirect to admin dashboard on successful login
      router.push("/admin/dashboard")
    } else {
      setError("Usuario o contraseña inválidos")
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="mb-8 flex items-center gap-2">
          <div className="bg-blue-500 text-white p-2 rounded-full">
            <Guitar className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            AcordesFacil
          </span>
        </Link>

        <Card className="w-full max-w-md border-blue-200 shadow-lg">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-blue-500" />
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
                Acceso Admin
              </CardTitle>
            </div>
            <CardDescription>Ingresa tus credenciales para acceder al área de administración</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-500 border border-red-200">{error}</div>
              )}
              <div className="space-y-2">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="border-blue-200 focus-visible:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link href="/admin/forgot-password" className="text-sm text-blue-600 hover:underline">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-blue-200 focus-visible:ring-blue-500"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                Iniciar Sesión
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-blue-600 hover:underline transition-colors">
            Volver al sitio público
          </Link>
        </div>
      </div>
    </div>
  )
}
