import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { getSiteUrl } from "@/lib/url";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Juventud Saludable | Bienestar, liderazgo e impacto joven",
    template: "%s | Juventud Saludable"
  },
  description:
    "Movimiento costarricense que impulsa el bienestar integral, liderazgo juvenil, participación ciudadana e innovación social.",
  keywords: [
    "juventud Costa Rica",
    "salud mental",
    "liderazgo juvenil",
    "voluntariado",
    "participación ciudadana"
  ],
  openGraph: {
    title: "Juventud Saludable",
    description: "Una generación organizada por el bienestar integral de Costa Rica.",
    url: siteUrl,
    siteName: "Juventud Saludable",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Juventud Saludable Costa Rica"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Juventud Saludable",
    description: "Bienestar integral, liderazgo juvenil e impacto nacional."
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Juventud Saludable",
    url: siteUrl,
    areaServed: "Costa Rica",
    description:
      "Movimiento juvenil costarricense para mejorar el bienestar integral, la participación ciudadana y el liderazgo joven.",
    sameAs: [
      "https://www.instagram.com/juventudsaludable",
      "https://www.linkedin.com/company/juventud-saludable"
    ]
  };

  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
