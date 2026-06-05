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

export const metadata: Metadata = {
  title: "Private Chef a Domicilio in Lombardia | Milano, Como, Varese",
  description: "Cene private ed eventi esclusivi in Lombardia. Il tuo private chef a domicilio a Milano, Como, Varese e Brianza per un'esperienza di fine dining a casa tua.",
  alternates: {
    canonical: "https://lucastable.com/private-chef-lombardia",
  },
};

export default function PrivateChefLombardia() {
  return (
    <div id="top" className="public-site relative min-h-screen bg-ls-green">
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
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
