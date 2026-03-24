import type React from "react"
import "@/app/globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata = {
  title: "Asiel Castillo | Saxofonista e Músico para Casamentos em Palmas TO",
  description: "Saxofonista profissional para casamentos, eventos corporativos e festas em Palmas, Tocantins. 16 anos de experiência, multi-instrumentista. Solicite um orçamento!",
  keywords: "saxofonista casamento Palmas, banda casamento Tocantins, músico eventos Palmas TO, saxofone casamento, música para casamento Palmas, Asiel Castillo, Edu Produções",
  authors: [{ name: "Asiel Castillo" }],
  creator: "Asiel Castillo",
  openGraph: {
    title: "Asiel Castillo | Saxofonista e Músico para Casamentos em Palmas TO",
    description: "Saxofonista profissional para casamentos, eventos corporativos e festas em Palmas, Tocantins. 16 anos de experiência.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
