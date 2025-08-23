import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Facebook, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { JsonLd } from "@/components/json-ld"

export default function ProfilePage() {
  // Informações personalizadas de Asiel
  const profile = {
    name: "Asiel",
    title: "Músico/Professor de Música",
    bio: "Músico profissional especializado em saxofone, com experiência em diversos estilos musicais. Ofereço apresentações exclusivas para casamentos, aniversários e eventos corporativos, trazendo sofisticação e emoção para momentos especiais.",
    photo: "/images/profile.png", // Foto real do Asiel
    whatsapp: "5563992510109", // Formatado para link do WhatsApp
    email: "asielsax@gmail.com",
    social: {
      instagram: "asielcastillo",
      facebook: "AsielAlejandro",
    },
  }

  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-gradient-to-b from-purple-100 to-amber-100 flex flex-col items-center justify-center p-4">
        <article className="w-full max-w-md mx-auto">
          <Card className="bg-white/90 backdrop-blur shadow-xl">
            <CardContent className="p-6">
              <header className="flex flex-col items-center text-center">
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                  <Image
                    src={profile.photo || "/placeholder.svg"}
                    alt={`${profile.name} - Saxofonista profissional tocando em evento`}
                    fill
                    className="object-cover object-top"
                    style={{ objectPosition: "center 20%" }}
                    priority
                    sizes="(max-width: 768px) 144px, 144px"
                  />
                </div>

                <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
                <h2 className="text-gray-500 mb-2">{profile.title}</h2>

                <p className="text-gray-600 text-sm mb-6">{profile.bio}</p>
              </header>

              <section aria-label="Redes sociais" className="grid grid-cols-2 gap-3 mb-6 w-full">
                {profile.social.instagram && (
                  <a
                    href={`https://instagram.com/${profile.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
                    aria-label={`Seguir ${profile.name} no Instagram`}
                  >
                    <Instagram size={20} aria-hidden="true" />
                    <span className="text-xs mt-1">Instagram</span>
                  </a>
                )}

                {profile.social.facebook && (
                  <a
                    href={`https://facebook.com/${profile.social.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-blue-600 text-white hover:opacity-90 transition-opacity"
                    aria-label={`Seguir ${profile.name} no Facebook`}
                  >
                    <Facebook size={20} aria-hidden="true" />
                    <span className="text-xs mt-1">Facebook</span>
                  </a>
                )}
              </section>

              <section aria-label="Formas de contato" className="grid grid-cols-1 gap-3 w-full">
                {profile.whatsapp && (
                  <a
                    href={`https://wa.me/${profile.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                    aria-label={`Entrar em contato com ${profile.name} via WhatsApp`}
                  >
                    <Phone size={20} aria-hidden="true" />
                    <span>Fale comigo no WhatsApp</span>
                  </a>
                )}

                <ContactForm />
              </section>
            </CardContent>
          </Card>
        </article>

        <footer className="mt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
          </p>
        </footer>
      </main>
    </>
  )
}
