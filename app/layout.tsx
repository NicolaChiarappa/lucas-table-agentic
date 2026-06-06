import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda, Spectral, Allison } from "next/font/google";
import { Toaster } from "sonner";
import "../styles/index.css";
import seoData from "../data/seo.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Display: Bodoni Moda — didone ad alto contrasto, eleganza da maison (e Bodoni è italiano) */
const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Testo / UI: Spectral — serif umanista pensato per schermo, romano e leggibile */
const spectral = Spectral({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Firma: Allison — lo script resta, ma solo per i momenti-firma del brand */
const allison = Allison({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lucastable.ch'),
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  authors: [{ name: seoData.author }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: seoData.og.title,
    description: seoData.og.description,
    type: "website",
    locale: seoData.og.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.twitter.title,
    description: seoData.twitter.description,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodService",
    "name": "Luca Chiarappa",
    "description": "Private Chef a domicilio in Ticino e Lombardia. Cene private, eventi esclusivi e menù personalizzati.",
    "url": "https://lucastable.com",
    "telephone": "+41762421754",
    "email": "lucastablee@gmail.com",
    "image": "https://lucastable.com/assets/lucas_logo_large.webp",
    "priceRange": "CHF 100-190",
    "areaServed": [
      { "@type": "State", "name": "Ticino" },
      { "@type": "AdministrativeArea", "name": "Lombardia" },
      { "@type": "Country", "name": "Svizzera" }
    ],
    "serviceType": "Private Chef a domicilio",
    "sameAs": [
      "https://www.instagram.com/privatechef_lucachiarappa/",
      "https://www.tiktok.com/@privatechef.luca"
    ]
  };

  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable} ${spectral.variable} ${allison.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
