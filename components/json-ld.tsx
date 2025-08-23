export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Asiel",
    jobTitle: "Músico Profissional",
    description:
      "Saxofonista profissional especializado em eventos, casamentos e apresentações corporativas em Palmas, Tocantins.",
    url: "https://asielsax.com",
    image: "https://asielsax.com/images/profile.png",
    telephone: "+55-63-99251-0109",
    email: "asielsax@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palmas",
      addressRegion: "TO",
      addressCountry: "BR",
    },
    sameAs: ["https://instagram.com/asielcastillo", "https://facebook.com/AsielAlejandro"],
    knowsAbout: [
      "Saxofone",
      "Música para eventos",
      "Apresentações musicais",
      "Música instrumental",
      "Casamentos",
      "Eventos corporativos",
    ],
    offers: {
      "@type": "Service",
      name: "Apresentações Musicais",
      description: "Apresentações de saxofone para casamentos, aniversários e eventos corporativos",
      areaServed: {
        "@type": "State",
        name: "Tocantins",
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
