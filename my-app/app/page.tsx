import HeroSection from "@/components/hero-section"
import FeaturedTours from "@/components/featured-tours"
// import CarRentalParallax from "@/components/CarRentalParallax"
// import CarCatalogueSection from "@/components/CarCatalogueSection"
import CarRentalCollection from "@/components/CarRentalCollection"
import PopularDestinationsCarousel from "@/components/PopularDestinationsCarousel"
import TestimonialsSection from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedTours />
     
      {/* <CarCatalogueSection /> */}
      
      <PopularDestinationsCarousel />
      <CarRentalCollection />
      <TestimonialsSection />
    </div>
  )
}
