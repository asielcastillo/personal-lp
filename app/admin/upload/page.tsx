"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { FileText, Info, Guitar, Search, UploadIcon, Lock } from "lucide-react"

export default function AdminUploadPage() {
  const [file, setFile] = useState(null)
  const [youtubeLink, setYoutubeLink] = useState("")

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would upload the file and form data here
    alert("Canción subida exitosamente!")
  }

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
              <Link href="/admin/dashboard" className="text-blue-200 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link href="/admin/upload" className="font-medium">
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
              Subir Nueva Canción
            </h1>
            <p className="text-muted-foreground">Añade nuevas canciones a tu biblioteca de acordes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Card className="border-blue-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-blue-700">Detalles de la Canción</CardTitle>
                    <CardDescription>Proporciona información sobre la canción</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Título</Label>
                        <Input
                          id="title"
                          placeholder="Ingresa el título de la canción"
                          required
                          className="border-blue-200 focus-visible:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="artist">Artista</Label>
                        <Input
                          id="artist"
                          placeholder="Ingresa el nombre del artista"
                          required
                          className="border-blue-200 focus-visible:ring-blue-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="key">Tonalidad</Label>
                          <Select>
                            <SelectTrigger id="key" className="border-blue-200 focus:ring-blue-500">
                              <SelectValue placeholder="Seleccionar tonalidad" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="C">C (Do)</SelectItem>
                              <SelectItem value="Cm">Cm (Do menor)</SelectItem>
                              <SelectItem value="C#">C# (Do sostenido)</SelectItem>
                              <SelectItem value="D">D (Re)</SelectItem>
                              <SelectItem value="Dm">Dm (Re menor)</SelectItem>
                              <SelectItem value="Eb">Eb (Mi bemol)</SelectItem>
                              <SelectItem value="E">E (Mi)</SelectItem>
                              <SelectItem value="Em">Em (Mi menor)</SelectItem>
                              <SelectItem value="F">F (Fa)</SelectItem>
                              <SelectItem value="F#m">F#m (Fa sostenido menor)</SelectItem>
                              <SelectItem value="G">G (Sol)</SelectItem>
                              <SelectItem value="Am">Am (La menor)</SelectItem>
                              <SelectItem value="Bb">Bb (Si bemol)</SelectItem>
                              <SelectItem value="Bm">Bm (Si menor)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bpm">BPM</Label>
                          <Input
                            id="bpm"
                            type="number"
                            placeholder="Tempo (BPM)"
                            required
                            className="border-blue-200 focus-visible:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="genre">Género</Label>
                        <Select>
                          <SelectTrigger id="genre" className="border-blue-200 focus:ring-blue-500">
                            <SelectValue placeholder="Seleccionar género" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pop">Pop</SelectItem>
                            <SelectItem value="rock">Rock</SelectItem>
                            <SelectItem value="balada">Balada</SelectItem>
                            <SelectItem value="reggaeton">Reggaeton</SelectItem>
                            <SelectItem value="folk">Folk</SelectItem>
                            <SelectItem value="country">Country</SelectItem>
                            <SelectItem value="jazz">Jazz</SelectItem>
                            <SelectItem value="blues">Blues</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="youtube">Enlace de YouTube (opcional)</Label>
                        <Input
                          id="youtube"
                          placeholder="https://www.youtube.com/watch?v=..."
                          value={youtubeLink}
                          onChange={(e) => setYoutubeLink(e.target.value)}
                          className="border-blue-200 focus-visible:ring-blue-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-blue-700">Archivo PDF con Acordes</CardTitle>
                    <CardDescription>Sube el PDF con los acordes de la canción</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-blue-200 rounded-lg p-6 flex flex-col items-center justify-center bg-blue-50/50">
                      {!file ? (
                        <>
                          <FileText className="h-10 w-10 text-blue-400 mb-4" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Arrastra y suelta tu archivo PDF aquí, o haz clic para navegar
                          </p>
                          <Input
                            id="pdf-upload"
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            onChange={handleFileChange}
                            required
                          />
                          <Button
                            variant="secondary"
                            onClick={() => document.getElementById("pdf-upload").click()}
                            className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none"
                          >
                            <UploadIcon className="h-4 w-4 mr-2" />
                            Explorar Archivos
                          </Button>
                        </>
                      ) : (
                        <>
                          <FileText className="h-10 w-10 text-blue-500 mb-4" />
                          <p className="font-medium mb-1">{file.name}</p>
                          <p className="text-sm text-muted-foreground mb-4">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          <Button
                            variant="outline"
                            onClick={() => setFile(null)}
                            className="border-blue-200 text-blue-700 hover:bg-blue-50"
                          >
                            Eliminar Archivo
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" type="button" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                      Guardar como Borrador
                    </Button>
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                      Publicar Ahora
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </div>

            <div>
              <div className="sticky top-6 space-y-6">
                <Card className="border-blue-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                      <Info className="h-4 w-4 text-blue-500" />
                      Consejos para Subir
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Asegúrate que el PDF sea legible</li>
                      <li>• Verifica que la tonalidad sea correcta</li>
                      <li>• El PDF debe contener solo los acordes, no partituras completas</li>
                      <li>• Incluye el BPM exacto para facilitar el ritmo</li>
                      <li>• Tamaño máximo del archivo: 10MB</li>
                    </ul>
                    <Separator className="my-4 bg-blue-100" />
                    <p className="text-sm text-muted-foreground">
                      Al subir, confirmas que tienes los derechos para compartir estos acordes y aceptas nuestros
                      Términos de Servicio.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-blue-700">Formato del PDF</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h3 className="font-medium text-blue-700">Recomendaciones:</h3>
                        <ul className="mt-2 space-y-1 list-disc pl-4">
                          <li>Usa un formato claro y legible</li>
                          <li>Incluye el título y artista en el encabezado</li>
                          <li>Organiza por secciones (verso, coro, etc.)</li>
                          <li>Indica la tonalidad y BPM</li>
                          <li>Tamaño de página A4 o Carta</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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
