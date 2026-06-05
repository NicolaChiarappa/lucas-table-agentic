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
  title: "Private Chef a Domicilio in Ticino | Lugano, Locarno, Bellinzona",
  description: "Il tuo private chef a domicilio nel Canton Ticino. Menu su misura, ingredienti di eccellenza e servizio premium per cene esclusive a Lugano, Locarno e Bellinzona.",
  alternates: {
    canonical: "https://lucastable.com/private-chef-ticino",
  },
};

export default function PrivateChefTicino() {
  return (
    <div id="top" className="public-site relative min-h-screen bg-ls-green">
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
        {/* <ServedAreasSection /> */}
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
