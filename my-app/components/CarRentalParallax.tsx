"use client"

// Removed useState and useEffect as they are no longer needed for this parallax type
import { Button } from "@/components/ui/button"
import { ArrowRight, Car } from "lucide-react"
import Link from "next/link"

export default function CarRentalParallax() {
  // Removed offsetY state and handleScroll function

  return (
    <section className="relative h-[40vh] md:h-[40vh] overflow-hidden flex items-center justify-center text-white">
      {/* Background Image Container for Parallax */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center z-0" // bg-fixed handles the parallax
        style={{
          backgroundImage: `url('/bg6.jpg')`, // Ensure this path is correct
          // Removed transform: `translateY(${offsetY}px)`
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center p-6 max-w-3xl mx-auto">
        <Car className="h-16 w-16 text-sky-400 mx-auto mb-6 opacity-90" />
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
          Explore at Your Pace
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto text-shadow-md">
          Discover the freedom of Mauritius with our reliable and diverse fleet of rental cars. Your adventure, your schedule.
        </p>
      
      </div>
      <style jsx global>{`
        .text-shadow-lg {
          text-shadow: 0px 3px 6px rgba(0,0,0,0.6);
        }
        .text-shadow-md {
          text-shadow: 0px 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  )
}
