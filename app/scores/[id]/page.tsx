"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ChevronLeft, Download, Heart, Music, Share2, Lock } from "lucide-react"

export default function ScorePage({ params }) {
  const [isLiked, setIsLiked] = useState(false)

  // In a real app, you would fetch the score data based on the ID
  const score = {
    id: params.id,
    title: "Moonlight Sonata",
    composer: "Ludwig van Beethoven",
    date: "May 15, 2024",
    views: 1245,
    likes: 328,
    description:
      "The Piano Sonata No. 14 in C-sharp minor, marked Quasi una fantasia, Op. 27, No. 2, is a piano sonata by Ludwig van Beethoven. It was completed in 1801 and dedicated in 1802 to his pupil Countess Giulietta Guicciardi. The popular name Moonlight Sonata goes back to a critic's remark after Beethoven's death.",
    difficulty: "Intermediate",
    instruments: ["Piano"],
    pages: 16,
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6" />
            <Link href="/" className="text-xl font-bold">
              ScoreShare
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/library" className="text-muted-foreground hover:text-foreground">
                Library
              </Link>
            </div>
            <Button asChild variant="ghost" size="icon" className="rounded-full">
              <Link href="/search">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            <Button asChild variant="outline">
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
            <Button asChild variant="ghost" size="sm" className="gap-1">
              <Link href="/library">
                <ChevronLeft className="h-4 w-4" />
                Back to Library
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{score.title}</h1>
                  <p className="text-xl text-muted-foreground">{score.composer}</p>
                </div>

                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <div className="text-center p-8">
                      <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">PDF Preview</p>
                      <p className="text-sm text-muted-foreground mt-2">Click to view full score</p>
                    </div>
                  </div>
                  <div className="p-4 border-t flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      {score.pages} pages • Added on {score.date}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </Card>

                <Tabs defaultValue="description">
                  <TabsList>
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <p>{score.description}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="details" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Composer</dt>
                            <dd>{score.composer}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Difficulty</dt>
                            <dd>{score.difficulty}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Instruments</dt>
                            <dd>{score.instruments.join(", ")}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Pages</dt>
                            <dd>{score.pages}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Added</dt>
                            <dd>{score.date}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Views</dt>
                            <dd>{score.views}</dd>
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
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Like this score</h3>
                      <Button
                        variant={isLiked ? "default" : "outline"}
                        size="icon"
                        onClick={() => setIsLiked(!isLiked)}
                        className={isLiked ? "text-white" : ""}
                      >
                        <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                        <span className="sr-only">Like</span>
                      </Button>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium mb-2">From the same composer</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/scores/2" className="text-sm hover:underline">
                            Für Elise
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-sm hover:underline">
                            Symphony No. 5
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-sm hover:underline">
                            Sonata Pathétique
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-sm hover:underline">
                            Ode to Joy
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium mb-2">Similar scores</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/scores/3" className="text-sm hover:underline">
                            Clair de Lune - Claude Debussy
                          </Link>
                        </li>
                        <li>
                          <Link href="/scores/4" className="text-sm hover:underline">
                            Nocturne Op. 9 No. 2 - Frédéric Chopin
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-sm hover:underline">
                            Liebestraum No. 3 - Franz Liszt
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ScoreShare. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
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
