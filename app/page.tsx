import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"

export default function ProfilePage() {
  // Informações personalizadas de Asiel
  const profile = {
    name: "Asiel",
    title: "Músico/Professor de Música",
    bio: "Músico profissional especializado em saxofone, com experiência em diversos estilos musicais. Ofereço apresentações exclusivas para casamentos, aniversários e eventos corporativos, trazendo sofisticação e emoção para momentos especiais.",
    photo: "/placeholder.svg?height=300&width=300", // Placeholder temporário
    whatsapp: "5563992510109", // Formatado para link do WhatsApp
    email: "asielsax@gmail.com",
    social: {
      instagram: "asielcastillo",
      facebook: "AsielAlejandro",
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-100 to-teal-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur shadow-xl">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
              <Image
                src={profile.photo || "/placeholder.svg?height=300&width=300"}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
            <p className="text-gray-500 mb-2">{profile.title}</p>

            <p className="text-gray-600 text-sm mb-6">{profile.bio}</p>

            <div className="grid grid-cols-2 gap-3 mb-6 w-full">
              {profile.social.instagram && (
                <a
                  href={`https://instagram.com/${profile.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
                >
                  <Instagram size={20} />
                  <span className="text-xs mt-1">Instagram</span>
                </a>
              )}

              {profile.social.facebook && (
                <a
                  href={`https://facebook.com/${profile.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2 rounded-lg bg-blue-600 text-white hover:opacity-90 transition-opacity"
                >
                  <Facebook size={20} />
                  <span className="text-xs mt-1">Facebook</span>
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3 w-full">
              {profile.whatsapp && (
                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  <Phone size={20} />
                  <span>Fale comigo no WhatsApp</span>
                </a>
              )}

              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
                >
                  <Mail size={20} />
                  <span>Envie-me um email</span>
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <footer className="mt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}
