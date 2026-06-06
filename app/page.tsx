
import { AvailabilityBadge } from "./components/AvailabilityBadge";
import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { InfoSection } from "./components/InfoSection";
import { ProposalsSection } from "./components/ProposalsSection";
import { MenuSection } from "./components/MenuSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";
import { ServedAreasSection } from "./components/ServedAreasSection";
import { FAQSection } from "./components/FAQSection";

export default function Home() {
  return (
    <div id="top" className='public-site relative min-h-screen bg-ls-green'>
      <SiteHeader />
      <AvailabilityBadge />
      <main>
        <HeroSection />
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
