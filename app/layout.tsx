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
  metadataBase: new URL('https://www.lucastable.ch'),
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
  /* ── JSON-LD: LocalBusiness (entità principale) ────────────── */
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment"],
    "@id": "https://www.lucastable.ch/#business",
    "name": "Lucas Table — Luca Chiarappa Private Chef",
    "alternateName": "Lucas Table",
    "description": "Private Chef a domicilio in Ticino e Lombardia. Luca Chiarappa trasforma la tua cucina in un ristorante d'eccellenza per una sera. Menu degustazione di 6 portate, servizio completo e riordino della cucina. Prezzi: CHF 100–190 a persona.",
    "url": "https://www.lucastable.ch",
    "telephone": "+41762421754",
    "email": "lucastablee@gmail.com",
    "image": "https://www.lucastable.ch/assets/lucas_logo_large.webp",
    "logo": "https://www.lucastable.ch/assets/lucas_logo_large.webp",
    "priceRange": "CHF 100–190",
    "currenciesAccepted": "CHF, EUR",
    "paymentAccepted": "Cash, Bank Transfer",
    "founder": {
      "@type": "Person",
      "@id": "https://www.lucastable.ch/#luca",
      "name": "Luca Chiarappa",
      "jobTitle": "Private Chef",
      "description": "Chef privato a domicilio, 23 anni, origini pugliesi, formazione in ristoranti stellati in Svizzera.",
      "knowsAbout": ["Alta cucina", "Fine dining", "Private dining", "Cucina italiana", "Menu degustazione"],
      "sameAs": [
        "https://www.instagram.com/privatechef_lucachiarappa/",
        "https://www.tiktok.com/@privatechef.luca"
      ]
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Canton Ticino",
        "containedInPlace": { "@type": "Country", "name": "Svizzera" },
        "containsPlace": [
          { "@type": "City", "name": "Lugano" },
          { "@type": "City", "name": "Locarno" },
          { "@type": "City", "name": "Bellinzona" },
          { "@type": "City", "name": "Mendrisio" },
          { "@type": "City", "name": "Ascona" }
        ]
      },
      {
        "@type": "AdministrativeArea",
        "name": "Lombardia",
        "containedInPlace": { "@type": "Country", "name": "Italia" },
        "containsPlace": [
          { "@type": "City", "name": "Milano" },
          { "@type": "City", "name": "Como" },
          { "@type": "City", "name": "Varese" },
          { "@type": "City", "name": "Monza" },
          { "@type": "City", "name": "Lecco" }
        ]
      }
    ],
    "serviceType": "Private Chef a domicilio",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Esperienze di Private Dining",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Il sesto senso",
          "description": "Cena conviviale intima per 2-8 ospiti. Atmosfera elegante con ingredienti d'eccellenza e menu degustazione di 6 portate.",
          "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 8, "unitText": "ospiti" }
        },
        {
          "@type": "Offer",
          "name": "Cin Cin",
          "description": "Esperienza esclusiva riservata a 2 ospiti. Percorso di alta cucina con attenzione assoluta su ogni dettaglio.",
          "eligibleQuantity": { "@type": "QuantitativeValue", "value": 2, "unitText": "ospiti" }
        },
        {
          "@type": "Offer",
          "name": "Su misura",
          "description": "Menu interamente personalizzato per ogni genere di occasione, da 2 a 20 ospiti.",
          "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 20, "unitText": "ospiti" }
        }
      ]
    },
    "hasMenu": [
      {
        "@type": "Menu",
        "name": "La Carne",
        "description": "Menu degustazione di carne — 6 portate, CHF 150 a persona",
        "offers": { "@type": "Offer", "price": "150", "priceCurrency": "CHF" },
        "hasMenuSection": {
          "@type": "MenuSection",
          "name": "Percorso degustazione",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Tartare di vitello, spuma di midollo mela acida", "description": "Amuse-bouche" },
            { "@type": "MenuItem", "name": "Carpaccio di filetto di manzo con demi glace tiepida e maionese all'acqua di pomodoro", "description": "Antipasto" },
            { "@type": "MenuItem", "name": "Tagliatella con stracotto di agnello, lime e polvere di ginepro", "description": "Primo" },
            { "@type": "MenuItem", "name": "Guancette di maiale brasate, purea di patate alla francese e cipolla rossa agrodolce", "description": "Secondo" },
            { "@type": "MenuItem", "name": "Panna cotta ai piselli e coulis di fragole", "description": "Pre-dessert" },
            { "@type": "MenuItem", "name": "Cioccolato bianco, caramello salato e orzo tostato", "description": "Dessert" }
          ]
        }
      },
      {
        "@type": "Menu",
        "name": "Il Mare",
        "description": "Menu degustazione di pesce — 6 portate, CHF 190 a persona",
        "offers": { "@type": "Offer", "price": "190", "priceCurrency": "CHF" },
        "hasMenuSection": {
          "@type": "MenuSection",
          "name": "Percorso degustazione",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Crocchetta di gambero con cuore di cremoso di bisque e gel al limone", "description": "Amuse-bouche" },
            { "@type": "MenuItem", "name": "Aragosta con emulsione di dragoncello e beurre blanc di cozze", "description": "Antipasto" },
            { "@type": "MenuItem", "name": "Orecchiette artigianali con ragù di polpo e emulsione al sedano rapa", "description": "Primo" },
            { "@type": "MenuItem", "name": "Ventresca di tonno al burro nocciola, crema allo zafferano e rafano, salsa pil pil e porro fondente", "description": "Secondo" },
            { "@type": "MenuItem", "name": "Sorbetto alla mela verde e il suo estratto e brunoise di sedano", "description": "Pre-dessert" },
            { "@type": "MenuItem", "name": "Ganache al caramello, arachidi e semifreddo al mascarpone", "description": "Dessert" }
          ]
        }
      },
      {
        "@type": "Menu",
        "name": "Vegetariano",
        "description": "Menu degustazione vegetariano — 6 portate, CHF 100 a persona",
        "offers": { "@type": "Offer", "price": "100", "priceCurrency": "CHF" },
        "hasMenuSection": {
          "@type": "MenuSection",
          "name": "Percorso degustazione",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Mini Scorpella San Severese con ripieno di crema al caciocavallo, ananas grigliato agrodolce e polvere di anice", "description": "Amuse-bouche" },
            { "@type": "MenuItem", "name": "Porro fondente, crema al cavolfiore tostato, coulis e polvere di lamponi e olio all'erba cipollina", "description": "Antipasto" },
            { "@type": "MenuItem", "name": "Lasagna scomposta con ragù bianco vegetariano, olio al rosmarino", "description": "Primo" },
            { "@type": "MenuItem", "name": "Cubo di melanzana cotta al vino rosso, la sua riduzione e spuma di salsa Bernese", "description": "Secondo" },
            { "@type": "MenuItem", "name": "Sorbetto al rabarbaro e olio al basilico", "description": "Pre-dessert" },
            { "@type": "MenuItem", "name": "Macedonia di frutta arrostita/grigliata con crema al mascarpone e vaniglia", "description": "Dessert" }
          ]
        }
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "reservations",
        "telephone": "+41762421754",
        "email": "lucastablee@gmail.com",
        "availableLanguage": ["Italian", "English"]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/privatechef_lucachiarappa/",
      "https://www.tiktok.com/@privatechef.luca"
    ],
    "knowsLanguage": ["it", "en"],
    "inLanguage": "it"
  };

  /* ── JSON-LD: WebSite ────────────── */
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.lucastable.ch/#website",
    "name": "Lucas Table",
    "url": "https://www.lucastable.ch",
    "description": "Sito ufficiale di Luca Chiarappa, Private Chef a domicilio in Ticino e Lombardia.",
    "publisher": { "@id": "https://www.lucastable.ch/#business" },
    "inLanguage": "it"
  };

  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
