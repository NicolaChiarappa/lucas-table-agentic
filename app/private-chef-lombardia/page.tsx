import type { Metadata } from "next";
import { AvailabilityBadge } from "../components/AvailabilityBadge";
import { SiteHeader } from "../components/SiteHeader";
import { HeroSection } from "../components/HeroSection";
import { InfoSection } from "../components/InfoSection";
import { ProposalsSection } from "../components/ProposalsSection";
import { MenuSection } from "../components/MenuSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { BookingSection } from "../components/BookingSection";
import { Footer } from "../components/Footer";
import { ServedAreasSection } from "../components/ServedAreasSection";
import { FAQSection } from "../components/FAQSection";

export const metadata: Metadata = {
  title: "Private Chef a Domicilio in Lombardia | Milano, Como, Varese",
  description: "Cene private ed eventi esclusivi in Lombardia. Il tuo private chef a domicilio a Milano, Como, Varese e Brianza per un'esperienza di fine dining a casa tua.",
  alternates: {
    canonical: "https://lucastable.ch/private-chef-lombardia",
  },
};

export default function PrivateChefLombardia() {
  const localJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lucastable.ch/#business",
    "name": "Lucas Table — Private Chef a Domicilio in Lombardia",
    "url": "https://lucastable.ch/private-chef-lombardia",
    "description": "Cene private ed eventi esclusivi in Lombardia. Private chef a domicilio a Milano, Como, Varese, Monza e Lecco con menu degustazione di 6 portate.",
    "telephone": "+41762421754",
    "email": "lucastablee@gmail.com",
    "priceRange": "CHF 100–190",
    "areaServed": {
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
    },
    "serviceType": "Private Chef a domicilio"
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lucastable.ch"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Private Chef Lombardia",
        "item": "https://lucastable.ch/private-chef-lombardia"
      }
    ]
  };

  return (
    <div id="top" className="public-site relative min-h-screen bg-ls-green">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />
      <AvailabilityBadge />
      <main>
        <HeroSection 
            title="Private Chef a Domicilio"
            titleHighlight="in Lombardia"
            description="Un ristorante stellato al tuo tavolo. Da Milano al Lago di Como, curo ogni dettaglio della tua cena privata. Goditi un percorso di alta cucina senza pensare a nulla."
        />
        <InfoSection />
        <ProposalsSection />
        <MenuSection />
        <ReviewsSection />
        <ServedAreasSection />
        <FAQSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
