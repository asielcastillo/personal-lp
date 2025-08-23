import type React from "react"
import "@/app/globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Asiel - Saxofonista Profissional | Música para Eventos em Tocantins",
  description:
    "Saxofonista profissional especializado em eventos. Casamentos, aniversários e eventos corporativos em Palmas-TO. Música de qualidade para momentos especiais.",
  keywords: [
    "saxofonista",
    "músico profissional",
    "eventos Palmas",
    "casamento música",
    "saxofone Tocantins",
    "música para eventos",
    "apresentações musicais",
    "Asiel saxofonista",
    "música instrumental",
    "eventos corporativos",
  ],
  authors: [{ name: "Asiel", url: "https://asielsax.com" }],
  creator: "Asiel",
  publisher: "Asiel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://asielsax.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Asiel - Saxofonista Profissional | Música para Eventos",
    description:
      "Saxofonista profissional especializado em eventos. Casamentos, aniversários e eventos corporativos em Palmas-TO.",
    url: "https://asielsax.com",
    siteName: "Asiel Saxofonista",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Asiel - Saxofonista Profissional",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asiel - Saxofonista Profissional | Música para Eventos",
    description:
      "Saxofonista profissional especializado em eventos. Casamentos, aniversários e eventos corporativos em Palmas-TO.",
    images: ["/images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Adicione seu código de verificação do Google
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Asiel Saxofonista" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#667eea" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
