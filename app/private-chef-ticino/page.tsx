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
  title: "Private Chef a Domicilio in Ticino | Lugano, Locarno, Bellinzona",
  description: "Il tuo private chef a domicilio nel Canton Ticino. Menu su misura, ingredienti di eccellenza e servizio premium per cene esclusive a Lugano, Locarno e Bellinzona.",
  alternates: {
    canonical: "https://lucastable.ch/private-chef-ticino",
  },
};

export default function PrivateChefTicino() {
  const localJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lucastable.ch/#business",
    "name": "Lucas Table — Private Chef a Domicilio in Ticino",
    "url": "https://lucastable.ch/private-chef-ticino",
    "description": "Il tuo private chef a domicilio nel Canton Ticino. Menu su misura, ingredienti di eccellenza e servizio premium per cene esclusive a Lugano, Locarno e Bellinzona.",
    "telephone": "+41762421754",
    "email": "lucastablee@gmail.com",
    "priceRange": "CHF 100–190",
    "areaServed": {
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
        "name": "Private Chef Ticino",
        "item": "https://lucastable.ch/private-chef-ticino"
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
          titleHighlight="in Ticino"
          description="Il lusso di una cena esclusiva nel comfort di casa tua. Dal Luganese al Locarnese, porto l'eccellenza della ristorazione direttamente nella tua sala da pranzo. Tu pensa solo a goderti la serata."
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
