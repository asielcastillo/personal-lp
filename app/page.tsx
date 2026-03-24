import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Phone, Music, FileText } from "lucide-react"

export default function ProfilePage() {
  const profile = {
    name: "Asiel Castillo",
    title: "Saxofonista & Multi-instrumentista",
    bio: "Músico profissional com 16 anos de experiência, especializado em casamentos, eventos corporativos e festas em Palmas, Tocantins. Transformo momentos especiais em experiências musicais memoráveis.",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20RECEPC%CC%A7A%CC%83O%200099.JPG-xK9hqjgfgChliGgptR0QLE8CWyDqDi.jpeg",
    whatsapp: "5563992510109",
    email: "asielsax@gmail.com",
    social: {
      instagram: "asielcastillo",
      instagramBand: "edugproducoes_",
      facebook: "AsielAlejandro",
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="order-1 lg:order-1 flex justify-center">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-primary/30 rounded-lg hidden md:block" />
                <div className="absolute -inset-8 border border-primary/10 rounded-lg hidden md:block" />
                
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src={profile.photo}
                    alt={`${profile.name} - Saxofonista profissional para casamentos em Palmas TO`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-2 lg:order-2 text-center lg:text-left">
              {/* Small decorative element */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <div className="h-px w-8 bg-primary" />
                <Music className="w-4 h-4 text-primary" />
                <div className="h-px w-8 bg-primary" />
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 tracking-tight text-balance">
                {profile.name}
              </h1>
              
              <p className="text-lg sm:text-xl text-primary font-medium mb-6 tracking-wide uppercase">
                {profile.title}
              </p>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                {profile.bio}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-8">
                <div className="text-center">
                  <span className="block font-serif text-3xl sm:text-4xl font-bold text-primary">16+</span>
                  <span className="text-sm text-muted-foreground">Anos de Música</span>
                </div>
                <div className="text-center">
                  <span className="block font-serif text-3xl sm:text-4xl font-bold text-primary">10+</span>
                  <span className="text-sm text-muted-foreground">Anos em Eventos</span>
                </div>
                <div className="text-center">
                  <span className="block font-serif text-3xl sm:text-4xl font-bold text-primary">5</span>
                  <span className="text-sm text-muted-foreground">Instrumentos</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <a
                  href={`https://instagram.com/${profile.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm"
                  aria-label="Seguir Asiel no Instagram"
                >
                  <Instagram size={18} />
                  <span className="hidden sm:inline">@{profile.social.instagram}</span>
                </a>

                <a
                  href={`https://instagram.com/${profile.social.instagramBand}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm"
                  aria-label="Seguir Edu Produções no Instagram"
                >
                  <Instagram size={18} />
                  <span className="hidden sm:inline">@{profile.social.instagramBand}</span>
                </a>

                <a
                  href={`https://facebook.com/${profile.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm"
                  aria-label="Seguir Asiel no Facebook"
                >
                  <Facebook size={18} />
                  <span className="hidden sm:inline">Facebook</span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href={`https://wa.me/${profile.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para meu evento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium shadow-lg shadow-primary/25"
                >
                  <Phone size={20} />
                  <span>Solicitar Orçamento</span>
                </a>

                <Link
                  href="/media-kit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors font-medium"
                >
                  <FileText size={20} />
                  <span>Media Kit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · Palmas, Tocantins
        </p>
      </footer>
    </main>
  )
}
