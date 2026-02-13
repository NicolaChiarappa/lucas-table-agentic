
import { AvailabilityBadge } from "./components/AvailabilityBadge";
import { Logo } from "./components/Logo";
import { BurgerMenu } from "./components/BurgerMenu";
import { HeroSection } from "./components/HeroSection";
import { InfoSection } from "./components/InfoSection";
import { ProposalsSection } from "./components/ProposalsSection";
import { MenuSection } from "./components/MenuSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className='min-h-screen bg-[#0d3b2e] relative'>
      <AvailabilityBadge />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
        <Logo className="w-50 md:w-70 text-white" />
      </div>
      <BurgerMenu />
      <HeroSection />
      <InfoSection />
      <ProposalsSection />
      <MenuSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
