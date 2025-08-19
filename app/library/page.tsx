import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search, TrendingUp, Lock, Guitar } from "lucide-react"

export default function LibraryPage() {
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
              <Link href="/" className="text-muted-foreground hover:text-blue-600 transition-colors relative group">
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/library" className="font-medium hover:text-blue-600 transition-colors relative group">
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
        <div className="container px-4 py-8 md:px-6">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
              Biblioteca de Acordes
            </h1>
            <p className="text-muted-foreground">Explora y busca entre todas las canciones disponibles</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar por título, artista o género..."
                  className="pl-8 border-blue-200 focus-visible:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px] border-blue-200 focus:ring-blue-500">
                    <SelectValue placeholder="Género" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los Géneros</SelectItem>
                    <SelectItem value="pop">Pop</SelectItem>
                    <SelectItem value="rock">Rock</SelectItem>
                    <SelectItem value="baladas">Baladas</SelectItem>
                    <SelectItem value="reggaeton">Reggaeton</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filtrar</span>
                </Button>
              </div>
            </div>

            <Tabs defaultValue="grid" className="w-full">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Mostrando 48 resultados</div>
                <TabsList className="bg-blue-50 p-1">
                  <TabsTrigger value="grid" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
                    Cuadrícula
                  </TabsTrigger>
                  <TabsTrigger value="list" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
                    Lista
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="grid" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {allSongs.map((song) => (
                    <SongCard key={song.id} song={song} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="list" className="mt-6">
                <div className="flex flex-col gap-4">
                  {allSongs.map((song) => (
                    <Link href={`/songs/${song.id}`} key={song.id} className="group">
                      <Card className="overflow-hidden transition-all hover:shadow-md hover:border-blue-200">
                        <div className="flex p-4">
                          <div className="h-16 w-12 bg-gradient-to-br from-blue-100 to-white flex items-center justify-center mr-4 rounded">
                            <Guitar className="h-6 w-6 text-blue-500 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium group-hover:text-blue-600 transition-colors">{song.title}</h3>
                            <p className="text-sm text-muted-foreground">{song.artist}</p>
                          </div>
                          <div className="flex flex-col items-end justify-between">
                            <div className="flex items-center gap-2">
                              <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                                {song.key}
                              </div>
                              <div className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                                {song.bpm} BPM
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground mt-2">
                              <TrendingUp className="mr-1 h-3 w-3 text-purple-500" />
                              {song.views} vistas
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-auto border-blue-200 text-blue-700 hover:bg-blue-50">
                Cargar Más
              </Button>
            </div>
          </div>
        </div>
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
        <CardHeader className="flex-1">
          <CardTitle className="line-clamp-1 group-hover:text-blue-600 transition-colors">{song.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{song.artist}</p>
        </CardHeader>
        <CardFooter className="border-t pt-4 flex justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{song.key}</div>
            <div className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">{song.bpm} BPM</div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <TrendingUp className="mr-1 h-3 w-3 text-purple-500" />
            {song.views}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

// Sample data for all songs
const allSongs = [
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
  {
    id: "9",
    title: "Counting Stars",
    artist: "OneRepublic",
    key: "Am",
    bpm: 122,
    date: "14 Mayo, 2024",
    views: 321,
    youtubeLink: "https://www.youtube.com/watch?v=hT_nvWreIhg",
  },
  {
    id: "10",
    title: "Believer",
    artist: "Imagine Dragons",
    key: "Bm",
    bpm: 125,
    date: "11 Mayo, 2024",
    views: 432,
    youtubeLink: "https://www.youtube.com/watch?v=7wtfhZwyrcc",
  },
  {
    id: "11",
    title: "Havana",
    artist: "Camila Cabello",
    key: "Em",
    bpm: 105,
    date: "9 Mayo, 2024",
    views: 287,
    youtubeLink: "https://www.youtube.com/watch?v=BQ0mxQXmLsk",
  },
  {
    id: "12",
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    key: "C",
    bpm: 110,
    date: "7 Mayo, 2024",
    views: 398,
    youtubeLink: "https://www.youtube.com/watch?v=zABLecsR5UE",
  },
]
