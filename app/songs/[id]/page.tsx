"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Download, Heart, Lock, Guitar, Youtube, ZoomIn, ZoomOut } from "lucide-react"

export default function SongPage({ params }) {
  const [isLiked, setIsLiked] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const videoRef = useRef(null)

  // In a real app, you would fetch the song data based on the ID
  const song = {
    id: params.id,
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    key: "Bm",
    bpm: 178,
    date: "15 Mayo, 2024",
    views: 1245,
    likes: 328,
    youtubeLink: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    youtubeEmbed: "kJQP7kiw5Fk",
    genre: "Reggaeton / Pop",
    pdfPages: 3,
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 150))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50))
  }

  const handleNextPage = () => {
    if (currentPage < song.pdfPages) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

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
              variant="ghost"
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
          <div className="flex items-center gap-2 mb-6">
            <Button asChild variant="ghost" size="sm" className="gap-1 hover:bg-blue-50 hover:text-blue-600">
              <Link href="/library">
                <ChevronLeft className="h-4 w-4" />
                Volver a Biblioteca
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
                    {song.title}
                  </h1>
                  <p className="text-xl text-muted-foreground">{song.artist}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">
                      Tonalidad: {song.key}
                    </div>
                    <div className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm font-medium">
                      {song.bpm} BPM
                    </div>
                    <div className="px-2 py-1 bg-slate-100 rounded text-sm">{song.genre}</div>
                  </div>
                </div>

                <Card className="overflow-hidden border-blue-200 shadow-md">
                  <div className="relative">
                    {/* PDF Viewer */}
                    <div
                      className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-white flex items-center justify-center border-b overflow-hidden"
                      style={{ height: `${zoom}%` }}
                    >
                      {/* This would be replaced with an actual PDF viewer in a real app */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <Guitar className="h-64 w-64 text-blue-200" />
                        </div>
                        <div className="z-10 bg-white shadow-md p-8 max-w-xl w-full mx-auto border border-blue-100 rounded-md">
                          <div className="text-center mb-4">
                            <h3 className="font-bold text-lg bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
                              {song.title}
                            </h3>
                            <p className="text-muted-foreground">{song.artist}</p>
                          </div>
                          <div className="border-t border-b py-4 my-4 border-blue-100">
                            <div className="text-center font-mono">
                              <p className="mb-2">
                                Tonalidad: <span className="text-blue-700 font-medium">{song.key}</span> | BPM:{" "}
                                <span className="text-purple-700 font-medium">{song.bpm}</span>
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Acordes en formato PDF - Página {currentPage} de {song.pdfPages}
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-center items-center h-40 bg-blue-50 rounded">
                            <p className="text-muted-foreground text-sm">Vista previa del PDF - Página {currentPage}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PDF Controls */}
                    <div className="absolute top-2 right-2 bg-white rounded-md shadow-md flex border border-blue-100">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleZoomOut}
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center px-2 text-sm font-medium text-blue-700">{zoom}%</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleZoomIn}
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border-t flex justify-between items-center bg-slate-50 border-blue-100">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="border-blue-200 text-blue-700 hover:bg-blue-50 disabled:opacity-50"
                      >
                        Anterior
                      </Button>
                      <div className="text-sm font-medium bg-white px-3 py-1 rounded border border-blue-100">
                        Página {currentPage} de {song.pdfPages}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleNextPage}
                        disabled={currentPage === song.pdfPages}
                        className="border-blue-200 text-blue-700 hover:bg-blue-50 disabled:opacity-50"
                      >
                        Siguiente
                      </Button>
                    </div>
                    <Button className="bg-blue-500 text-white hover:bg-blue-600 border-none">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar PDF
                    </Button>
                  </div>
                </Card>

                {song.youtubeEmbed && (
                  <Card className="overflow-hidden border-blue-200 shadow-md">
                    <div className="aspect-video bg-muted relative">
                      <iframe
                        ref={videoRef}
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${song.youtubeEmbed}`}
                        title={`${song.title} - ${song.artist}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                      ></iframe>
                    </div>
                  </Card>
                )}

                <Tabs defaultValue="details">
                  <TabsList className="bg-blue-50 p-1">
                    <TabsTrigger
                      value="details"
                      className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
                    >
                      Detalles
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="mt-4">
                    <Card className="border-blue-200">
                      <CardContent className="p-6">
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Artista</dt>
                            <dd className="text-blue-700">{song.artist}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Tonalidad</dt>
                            <dd className="text-blue-700">{song.key}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">BPM</dt>
                            <dd className="text-purple-700">{song.bpm}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Género</dt>
                            <dd>{song.genre}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Añadido</dt>
                            <dd>{song.date}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Vistas</dt>
                            <dd>{song.views}</dd>
                          </div>
                        </dl>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div>
              <div className="sticky top-6 space-y-6">
                <Card className="border-blue-200 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">¿Te gusta esta canción?</h3>
                      <Button
                        variant={isLiked ? "default" : "outline"}
                        size="icon"
                        onClick={() => setIsLiked(!isLiked)}
                        className={
                          isLiked
                            ? "bg-red-500 text-white hover:bg-red-600 border-none"
                            : "border-red-200 text-red-500 hover:bg-red-50"
                        }
                      >
                        <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                        <span className="sr-only">Me gusta</span>
                      </Button>
                    </div>
                    <Separator className="bg-blue-100" />
                    <div>
                      <h3 className="font-medium mb-2 text-blue-700">Del mismo artista</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/songs/2"
                            className="text-sm hover:text-blue-600 hover:underline transition-colors"
                          >
                            Échame La Culpa
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-sm hover:text-blue-600 hover:underline transition-colors">
                            No Me Doy por Vencido
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-sm hover:text-blue-600 hover:underline transition-colors">
                            Imposible
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Separator className="bg-blue-100" />
                    <div>
                      <h3 className="font-medium mb-2 text-blue-700">Canciones similares</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/songs/3"
                            className="text-sm hover:text-blue-600 hover:underline transition-colors"
                          >
                            Bailando - Enrique Iglesias
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/songs/4"
                            className="text-sm hover:text-blue-600 hover:underline transition-colors"
                          >
                            Danza Kuduro - Don Omar
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-sm hover:text-blue-600 hover:underline transition-colors">
                            Súbeme La Radio - Enrique Iglesias
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {song.youtubeLink && (
                      <>
                        <Separator className="bg-blue-100" />
                        <div>
                          <h3 className="font-medium mb-2 text-blue-700">Enlaces</h3>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                          >
                            <a href={song.youtubeLink} target="_blank" rel="noopener noreferrer">
                              <Youtube className="h-4 w-4 mr-2" />
                              Ver en YouTube
                            </a>
                          </Button>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
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

function Search({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
