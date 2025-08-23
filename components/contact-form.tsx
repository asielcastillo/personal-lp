"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage(result.message)
        setIsSuccess(true)
        setFormData({ name: "", email: "", message: "" })

        // Fechar o formulário após 3 segundos
        setTimeout(() => {
          setIsOpen(false)
          setMessage("")
          setIsSuccess(false)
        }, 3000)
      } else {
        setMessage(result.error || "Erro ao enviar mensagem")
        setIsSuccess(false)
      }
    } catch (error) {
      setMessage("Erro de conexão. Verifique sua internet e tente novamente.")
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors w-full"
      >
        <Mail size={20} />
        <span>Envie-me uma mensagem</span>
      </button>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Mail size={20} />
          Entre em contato
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="text-center py-6">
            <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
            <p className="text-green-600 font-medium">{message}</p>
            <p className="text-sm text-gray-500 mt-2">Fechando automaticamente...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Seu melhor email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Conte-me sobre seu evento ou projeto musical..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                disabled={isLoading}
              />
            </div>

            {message && !isSuccess && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{message}</div>}

            <div className="flex gap-2">
              <Button type="submit" disabled={isLoading} className="flex-1">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Enviar mensagem
                  </>
                )}
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)} disabled={isLoading}>
                Cancelar
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
