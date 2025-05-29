import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import FeaturedTours from "@/components/featured-tours"
import QuickBooking from "@/components/quick-booking"
import TestimonialsSection from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <ServicesSection /> */}
      <FeaturedTours />
      <TestimonialsSection />
    </div>
  )
}
