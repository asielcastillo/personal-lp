import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Guitar, Search, Upload, BarChart3, FileText, Music, Users, Settings, PlusCircle, Lock } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Guitar className="h-6 w-6" />
              <span className="text-xl font-bold">AcordesFacil</span>
            </Link>
            <div className="ml-4 px-2 py-1 bg-yellow-500 rounded-md text-xs font-medium flex items-center">
              <Lock className="h-3 w-3 mr-1" />
              ÁREA ADMIN
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6">
              <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="/library" className="text-blue-200 hover:text-white transition-colors">
                Biblioteca
              </Link>
              <Link href="/admin/dashboard" className="font-medium">
                Dashboard
              </Link>
              <Link href="/admin/upload" className="text-blue-200 hover:text-white transition-colors">
                Subir
              </Link>
            </div>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full bg-blue-800 border-blue-700 hover:bg-blue-700 text-white"
            >
              <Link href="/search">
                <Search className="h-4 w-4" />
                <span className="sr-only">Buscar</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 py-8 md:px-6">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
              Panel de Administración
            </h1>
            <p className="text-muted-foreground">Gestiona tu biblioteca de acordes</p>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Canciones</CardTitle>
                  <FileText className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-700">142</div>
                  <p className="text-xs text-muted-foreground">+12 desde el mes pasado</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Vistas</CardTitle>
                  <BarChart3 className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-700">8,549</div>
                  <p className="text-xs text-muted-foreground">+23% desde el mes pasado</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Géneros</CardTitle>
                  <Music className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-700">12</div>
                  <p className="text-xs text-muted-foreground">Pop, Rock, Baladas...</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Visitantes</CardTitle>
                  <Users className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-700">1,234</div>
                  <p className="text-xs text-muted-foreground">+7% desde el mes pasado</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2 border-blue-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-blue-700">Actividad Reciente</CardTitle>
                  <CardDescription>Tus subidas y ediciones recientes de canciones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="mr-4 rounded-full p-2 bg-blue-100">{activity.icon}</div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-blue-700">Acciones Rápidas</CardTitle>
                  <CardDescription>Tareas administrativas comunes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full justify-start bg-blue-500 hover:bg-blue-600">
                    <Link href="/admin/upload">
                      <Upload className="mr-2 h-4 w-4" />
                      Subir Nueva Canción
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start border-blue-200 text-blue-700 hover:bg-blue-50"
                  >
                    <Link href="/admin/genres">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Crear Género
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start border-blue-200 text-blue-700 hover:bg-blue-50"
                  >
                    <Link href="/admin/songs">
                      <FileText className="mr-2 h-4 w-4" />
                      Gestionar Canciones
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start border-blue-200 text-blue-700 hover:bg-blue-50"
                  >
                    <Link href="/admin/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Configuración del Sitio
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-blue-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-blue-700">Canciones Populares</CardTitle>
                <CardDescription>Las canciones más vistas en tu sitio</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="week" className="w-full">
                  <TabsList className="bg-blue-50 p-1 mb-4">
                    <TabsTrigger
                      value="week"
                      className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
                    >
                      Esta Semana
                    </TabsTrigger>
                    <TabsTrigger
                      value="month"
                      className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
                    >
                      Este Mes
                    </TabsTrigger>
                    <TabsTrigger
                      value="alltime"
                      className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
                    >
                      Todo el Tiempo
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="week">
                    <div className="space-y-4">
                      {popularSongs.week.map((song, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0 border-blue-100"
                        >
                          <div className="space-y-1">
                            <p className="font-medium">{song.title}</p>
                            <p className="text-sm text-muted-foreground">{song.artist}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm text-muted-foreground">{song.views} vistas</div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                            >
                              Editar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="month">
                    <div className="space-y-4">
                      {popularSongs.month.map((song, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0 border-blue-100"
                        >
                          <div className="space-y-1">
                            <p className="font-medium">{song.title}</p>
                            <p className="text-sm text-muted-foreground">{song.artist}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm text-muted-foreground">{song.views} vistas</div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                            >
                              Editar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="alltime">
                    <div className="space-y-4">
                      {popularSongs.alltime.map((song, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0 border-blue-100"
                        >
                          <div className="space-y-1">
                            <p className="font-medium">{song.title}</p>
                            <p className="text-sm text-muted-foreground">{song.artist}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm text-muted-foreground">{song.views} vistas</div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                            >
                              Editar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} AcordesFacil.com. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-blue-200 hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="/privacy" className="text-sm text-blue-200 hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/contact" className="text-sm text-blue-200 hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const recentActivity = [
  {
    icon: <Upload className="h-4 w-4 text-blue-600" />,
    title: "Despacito",
    description: "Subiste una nueva canción",
    time: "2h atrás",
  },
  {
    icon: <FileText className="h-4 w-4 text-blue-600" />,
    title: "Perfect",
    description: "Actualizaste los acordes",
    time: "5h atrás",
  },
  {
    icon: <FileText className="h-4 w-4 text-blue-600" />,
    title: "Shallow",
    description: "Corregiste la tonalidad",
    time: "Ayer",
  },
  {
    icon: <Upload className="h-4 w-4 text-blue-600" />,
    title: "Bohemian Rhapsody",
    description: "Subiste una nueva canción",
    time: "2 días atrás",
  },
  {
    icon: <FileText className="h-4 w-4 text-blue-600" />,
    title: "Blinding Lights",
    description: "Añadiste el enlace de YouTube",
    time: "3 días atrás",
  },
]

const popularSongs = {
  week: [
    {
      title: "Despacito",
      artist: "Luis Fonsi ft. Daddy Yankee",
      views: 542,
    },
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      views: 423,
    },
    {
      title: "Shallow",
      artist: "Lady Gaga & Bradley Cooper",
      views: 387,
    },
  ],
  month: [
    {
      title: "Despacito",
      artist: "Luis Fonsi ft. Daddy Yankee",
      views: 1245,
    },
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      views: 982,
    },
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      views: 754,
    },
  ],
  alltime: [
    {
      title: "Despacito",
      artist: "Luis Fonsi ft. Daddy Yankee",
      views: 5245,
    },
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      views: 4982,
    },
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      views: 4754,
    },
  ],
}
