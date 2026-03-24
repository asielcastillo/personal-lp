import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone, Mail, MapPin, ArrowLeft, Music, Users, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Media Kit | Asiel Castillo - Saxofonista para Casamentos em Palmas TO",
  description: "Conheça o trabalho de Asiel Castillo e Edu Produções. Saxofonista e banda para casamentos, eventos corporativos e festas em Palmas, Tocantins. Solicite um orçamento!",
  keywords: "media kit saxofonista, músico casamento Palmas, Edu Produções, banda Tocantins, saxofone eventos",
}

const images = {
  hero: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20RECEPC%CC%A7A%CC%83O%200099.JPG-xK9hqjgfgChliGgptR0QLE8CWyDqDi.jpeg",
  piano1: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3NOIVO%200009.JPG-SovWlOnQ5GV3VpCXOBkkQkb7LR3dOh.jpeg",
  piano2: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3NOIVO%200007.JPG-mh55zlavkQM4PrMHyCo40MQ5timY0V.jpeg",
  piano3: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3NOIVO%200008.JPG-xQAZeodHG3bi8IeQlIvqmkYIvGsueF.jpeg",
  bass: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20RECEPC%CC%A7A%CC%83O%200100.JPG-VTKkMmfczaB0PjjNxJxKFJdYzzbxjY.jpeg",
  keyboard: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perfil-YBjylmyiY6hjwajcrt2u3y8TJbrFqR.jpg",
  pianoHands: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3NOIVO%200016.JPG-0F27nxRtlQHFUinc62UJ8qxJQV7t5q.jpeg",
  pianoTop: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3NOIVO%200006.JPG-vhnesZbFGBv6SAmlrSG7xVqetKvmKI.jpeg",
}

const instruments = [
  { name: "Saxofone", description: "Performance elegante para cerimônias e recepções" },
  { name: "Teclado", description: "Versatilidade em diferentes estilos musicais" },
  { name: "Piano", description: "Sofisticação para momentos especiais" },
  { name: "Baixo", description: "Base rítmica para formações completas" },
  { name: "Violão", description: "Acompanhamento acústico intimista" },
]

const formations = [
  {
    name: "Solo Sax",
    description: "Performance solo com saxofone, ideal para recepções, cerimônias, jantares e coquetéis, com sofisticação, leveza e elegância.",
    ideal: "Cerimônias, Coquetéis, Jantares",
  },
  {
    name: "Instrumental",
    description: "Formação com instrumentos como teclado, cajón e sax, criando uma experiência envolvente, moderna e refinada para eventos sociais e corporativos.",
    ideal: "Eventos Corporativos, Recepções",
  },
  {
    name: "Banda Completa",
    description: "Formação completa para eventos que pedem mais energia, presença de palco, interação e animação.",
    ideal: "Festas, Casamentos, Formaturas",
  },
]

const partners = [
  { name: "Maple Bear Palmas", type: "Educação" },
  { name: "Bateras Beats Palmas", type: "Escola de Música" },
  { name: "Granduh Buffet", type: "Eventos" },
]

export default function MediaKitPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <span className="font-serif text-lg font-semibold">Media Kit</span>
          <a
            href="https://wa.me/5563992510109?text=Olá! Vi o Media Kit e gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
          >
            Contato
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero}
            alt="Asiel Castillo tocando saxofone"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Edu Produções</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
              Asiel<br />Castillo
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transformando eventos em experiências musicais memoráveis
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              <div>
                <span className="block font-serif text-4xl font-bold text-primary">16</span>
                <span className="text-sm text-muted-foreground">Anos de Música</span>
              </div>
              <div>
                <span className="block font-serif text-4xl font-bold text-primary">10</span>
                <span className="text-sm text-muted-foreground">Anos em Eventos</span>
              </div>
              <div>
                <span className="block font-serif text-4xl font-bold text-primary">5</span>
                <span className="text-sm text-muted-foreground">Instrumentos</span>
              </div>
              <div>
                <span className="block font-serif text-4xl font-bold text-primary">+</span>
                <span className="text-sm text-muted-foreground">Professor</span>
              </div>
            </div>

            <a
              href="https://wa.me/5563992510109?text=Olá! Vi o Media Kit e gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg"
            >
              <Phone size={20} />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Sobre o Artista</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Uma história de paixão pela música
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Asiel Castillo é professor de música formado na Venezuela, multi-instrumentista e profissional com cerca de 16 anos de experiência na música e 10 anos em eventos.
                </p>
                <p>
                  Atuou como músico, professor e performer em casamentos, festas particulares e diferentes ambientes musicais. No Brasil, fortalece sua atuação por meio da Edu Produções, oferecendo experiências musicais elegantes, emocionantes e profissionais.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Professor de Música", "Multi-instrumentista", "Formação na Venezuela", "Experiência Internacional"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image src={images.piano1} alt="Asiel tocando piano" fill className="object-cover" />
                </div>
                <div className="relative h-32 md:h-40 rounded-lg overflow-hidden">
                  <Image src={images.pianoHands} alt="Mãos no piano" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 md:h-40 rounded-lg overflow-hidden">
                  <Image src={images.bass} alt="Asiel tocando baixo" fill className="object-cover" />
                </div>
                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image src={images.piano3} alt="Asiel sorrindo ao piano" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Versatilidade</span>
              <div className="h-px w-8 bg-primary" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Uma experiência musical versátil
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              A música certa transforma o ambiente, emociona convidados e valoriza cada etapa do evento. Com domínio de diferentes instrumentos e sensibilidade artística, oferecemos soluções musicais adaptadas ao estilo de cada ocasião.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {instruments.map((instrument) => (
              <div
                key={instrument.name}
                className="p-6 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-colors text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{instrument.name}</h3>
                <p className="text-sm text-muted-foreground">{instrument.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Formações</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Opções para o seu evento
            </h2>

            <p className="text-background/70 max-w-2xl mx-auto">
              Formatos personalizados conforme o perfil do evento. Cada ocasião merece a formação musical ideal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <div
                key={formation.name}
                className={`p-8 rounded-2xl ${
                  index === 1 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background/5 border border-background/20"
                }`}
              >
                <span className={`text-sm font-medium uppercase tracking-wider ${
                  index === 1 ? "text-primary-foreground/80" : "text-primary"
                }`}>
                  Formação {index + 1}
                </span>
                <h3 className="font-serif text-3xl font-bold mt-2 mb-4">{formation.name}</h3>
                <p className={`mb-6 ${index === 1 ? "text-primary-foreground/80" : "text-background/70"}`}>
                  {formation.description}
                </p>
                <div className={`text-sm ${index === 1 ? "text-primary-foreground/60" : "text-background/50"}`}>
                  <span className="font-medium">Ideal para:</span> {formation.ideal}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-background/50 mt-10">
            * Valor sob consulta
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Momentos em Eventos
            </h2>
            <p className="text-muted-foreground">
              Registros de apresentações em casamentos e eventos especiais
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src={images.hero} alt="Apresentação saxofone" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src={images.piano2} alt="Apresentação piano" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src={images.keyboard} alt="Com a banda" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src={images.bass} alt="Tocando baixo" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden md:col-span-2">
              <Image src={images.pianoTop} alt="Vista do piano" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden md:col-span-2">
              <Image src={images.piano1} alt="Tocando piano" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Credibilidade</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experiência que transmite confiança
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Além de sua trajetória musical, Asiel Castillo construiu atuação profissional em instituições e espaços reconhecidos, reforçando sua credibilidade e compromisso com a excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="p-8 bg-background rounded-xl border border-border text-center"
              >
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{partner.type}</span>
                <h3 className="font-serif text-2xl font-semibold text-foreground mt-2">{partner.name}</h3>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 italic">
            Parcerias e experiências que reforçam profissionalismo, confiança e qualidade na entrega musical.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <Phone className="w-5 h-5 text-primary" />
            <div className="h-px w-8 bg-primary" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos levar a música certa para o seu evento
          </h2>

          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Se você busca uma experiência musical profissional, elegante e adaptada ao estilo do seu evento, a Edu Produções está pronta para atender você.
          </p>

          <a
            href="https://wa.me/5563992510109?text=Olá! Vi o Media Kit e gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg mb-12"
          >
            <Phone size={20} />
            Solicitar Orçamento via WhatsApp
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <a
              href="mailto:asielsax@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={20} />
              asielsax@gmail.com
            </a>

            <a
              href="https://instagram.com/asielcastillo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram size={20} />
              @asielcastillo
            </a>

            <a
              href="https://instagram.com/edugproducoes_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram size={20} />
              @edugproducoes_
            </a>

            <span className="flex items-center gap-2">
              <MapPin size={20} />
              Palmas, Tocantins
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Asiel Castillo · Edu Produções · Palmas, Tocantins
          </p>
        </div>
      </footer>
    </main>
  )
}
