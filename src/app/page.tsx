import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { FoodShowcaseSection } from "@/components/sections/food-showcase";
import { MenuSection } from "@/components/sections/menu";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { OpeningHoursSection } from "@/components/sections/opening-hours";
import { SpecialtiesSection } from "@/components/sections/specialties";
import { CinematicSignature } from "@/components/food/cinematic-signature";
import { ReservationSection } from "@/components/sections/reservation";
import { Footer } from "@/components/sections/footer";
import { MobileReservationBar } from "@/components/sections/mobile-reservation-bar";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="content" className="pb-20 md:pb-0">
        <Hero />
        <FoodShowcaseSection />
        <MenuSection />
        <TestimonialsSection />
        <OpeningHoursSection />
        <SpecialtiesSection />
        <CinematicSignature />
        <ReservationSection />
      </main>
      <Footer />
      <MobileReservationBar />
    </>
  );
}
