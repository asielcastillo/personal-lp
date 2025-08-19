import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Clock, BookOpen, TrendingUp, Lock, Guitar } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="bg-blue-500 text-white p-2 rounded-full">
                <Guitar className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                AcordesFacil
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6">
              <Link href="/" className="font-medium hover:text-blue-600 transition-colors relative group">
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/library"
                className="text-muted-foreground hover:text-blue-600 transition-colors relative group"
              >
                Biblioteca
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <Link href="/search">
                <Search className="h-4 w-4" />
                <span className="sr-only">Buscar</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="hover:bg-blue-500 hover:text-white transition-colors">
              <Link href="/admin/login">
                <Lock className="h-4 w-4 mr-2" />
                Admin
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
          {/* Imagen de fondo musical desenfocada */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/music-background.png')",
                filter: "blur(8px)",
                opacity: 0.4,
                transform: "scale(1.1)",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-white"></div>
          </div>

          {/* Elementos decorativos */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full opacity-30 -z-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-30 -z-10 blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Acordes Fáciles Para Todos
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-700 md:text-xl font-medium">
                  La mejor colección de acordes y cifras para tus canciones favoritas. Fácil de aprender y tocar.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Link href="/library">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explorar Biblioteca
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Link href="/search">
                    <Search className="mr-2 h-4 w-4" />
                    Buscar Canciones
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 py-12 md:px-6 relative">
          {/* Elementos decorativos */}
          <div className="absolute top-12 right-8 w-32 h-32 bg-blue-100 rounded-full opacity-50 -z-10"></div>
          <div className="absolute bottom-12 left-8 w-24 h-24 bg-purple-100 rounded-full opacity-50 -z-10"></div>

          <Tabs defaultValue="popular" className="w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
                Canciones Destacadas
              </h2>
              <TabsList className="bg-blue-50 p-1">
                <TabsTrigger value="popular" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Populares
                </TabsTrigger>
                <TabsTrigger value="recent" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
                  <Clock className="h-4 w-4 mr-2" />
                  Recientes
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularSongs.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="recent" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recentSongs.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="container px-4 py-12 md:px-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
              Géneros Musicales
            </h2>
            <p className="text-muted-foreground">Explora acordes por género musical</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {genres.map((genre) => (
              <Link href={`/genres/${genre.id}`} key={genre.id} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-md border-t-4 border-t-blue-500 h-full">
                  <div className="aspect-video relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('/images/genres/${genre.id}.jpg')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">{genre.title}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground">{genre.description}</p>
                  </CardContent>
                  <CardFooter className="bg-slate-50">
                    <p className="text-sm text-muted-foreground">{genre.songCount} canciones</p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AcordesFacil.com. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-blue-600 hover:underline">
              Términos
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-blue-600 hover:underline">
              Privacidad
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-blue-600 hover:underline">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SongCard({ song }) {
  return (
    <Link href={`/songs/${song.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 h-full flex flex-col group">
        <div className="aspect-[3/4] relative bg-gradient-to-br from-blue-100 via-white to-purple-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Guitar className="h-12 w-12 text-blue-500 group-hover:text-blue-600" />
            </div>
          </div>
          {/* Añadir un pequeño detalle decorativo */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 rounded-bl-full"></div>
        </div>
        <CardHeader className="flex-1 pb-2">
          <CardTitle className="line-clamp-1 group-hover:text-blue-600 transition-colors">{song.title}</CardTitle>
          <div className="text-sm text-muted-foreground">{song.artist}</div>
        </CardHeader>
        <CardFooter className="border-t pt-4 flex justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{song.key}</div>
            <div className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">{song.bpm} BPM</div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <TrendingUp className="mr-1 h-3 w-3 text-purple-500" />
            {song.views} vistas
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

const popularSongs = [
  {
    id: "1",
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    key: "Bm",
    bpm: 178,
    date: "15 Mayo, 2024",
    views: 1245,
    youtubeLink: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
  },
  {
    id: "2",
    title: "Perfect",
    artist: "Ed Sheeran",
    key: "Ab",
    bpm: 95,
    date: "12 Mayo, 2024",
    views: 982,
    youtubeLink: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
  },
  {
    id: "3",
    title: "Shallow",
    artist: "Lady Gaga & Bradley Cooper",
    key: "G",
    bpm: 96,
    date: "10 Mayo, 2024",
    views: 876,
    youtubeLink: "https://www.youtube.com/watch?v=bo_efYhYU2A",
  },
  {
    id: "4",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    key: "Bb",
    bpm: 72,
    date: "8 Mayo, 2024",
    views: 754,
    youtubeLink: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
  },
]

const recentSongs = [
  {
    id: "5",
    title: "Blinding Lights",
    artist: "The Weeknd",
    key: "F#m",
    bpm: 171,
    date: "19 Mayo, 2024",
    views: 342,
    youtubeLink: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
  },
  {
    id: "6",
    title: "Dance Monkey",
    artist: "Tones and I",
    key: "F#m",
    bpm: 98,
    date: "18 Mayo, 2024",
    views: 289,
    youtubeLink: "https://www.youtube.com/watch?v=q0hyYWKXF0Q",
  },
  {
    id: "7",
    title: "Bad Guy",
    artist: "Billie Eilish",
    key: "Gm",
    bpm: 135,
    date: "17 Mayo, 2024",
    views: 412,
    youtubeLink: "https://www.youtube.com/watch?v=DyDfgMOUjCI",
  },
  {
    id: "8",
    title: "Shape of You",
    artist: "Ed Sheeran",
    key: "C#m",
    bpm: 96,
    date: "16 Mayo, 2024",
    views: 523,
    youtubeLink: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
  },
]

const genres = [
  {
    id: "pop",
    title: "Pop",
    description: "Los mejores acordes de canciones pop actuales y clásicas.",
    songCount: 124,
  },
  {
    id: "rock",
    title: "Rock",
    description: "Acordes para los grandes clásicos del rock y nuevos éxitos.",
    songCount: 98,
  },
  {
    id: "baladas",
    title: "Baladas",
    description: "Canciones románticas y baladas para todas las ocasiones.",
    songCount: 87,
  },
]
