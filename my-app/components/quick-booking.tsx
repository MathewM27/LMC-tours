"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Calendar,
  Search,
  Briefcase,
  Plane,
  ChevronRight,
  Car, // Add Car icon
} from "lucide-react"



const bookingTabs = [
  { id: "tours", label: "Tours package", icon: Briefcase },
  { id: "carRentals", label: "Car Rentals", icon: Car }, // Changed from Stays to Car Rentals
  { id: "flights", label: "Airport Trips", icon: Plane },
]

export default function HeroSection() {
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [activeTab, setActiveTab] = useState(bookingTabs[0].id)
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = () => {
    console.log("Searching for:", { activeTab, location, date })
    // Implement search logic here
  }

  return (
    <section className="min-h-screen bg-white flex flex-col pt-2"> {/* Adjusted top padding */}
      

      {/* Main Content Area */}
      <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-10 gap-8 items-center py-12 md:py-0"> {/* Adjusted py for md */}
        {/* Left Side (Primary Content - Wider) */}
        <div className="md:col-span-6 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-gray leading-tight">
            Your Journey
            <span className="block text-blue-800">starts here.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Experience the magic of Mauritius with our expertly crafted tours, reliable car rentals, and personalized services.
          </p>
          

          {/* Search/Booking UI */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-6">
            {/* Tabs */}
            <div className="flex border-b">
              {bookingTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors
                    ${activeTab === tab.id
                      ? "border-b-2 border-blue-700 text-black"
                      : "text-black hover:text-gray-700"
                    }`}
                >
                  <tab.icon className="h-5 w-5" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Location (e.g., Port Louis)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 w-full border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-xl"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-10 h-12 w-full border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-xl"
                />
              </div>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              className="w-full btn-primary bg-blue-700 text-lg text-white rounded-xl py-3"
            >
              <ChevronRight className="mr-2 h-5 w-5" />
              Book
            </Button>
          </div>
        </div>

        {/* Right Side (Visual Content - Narrower) */}
        {/* Changed from 'hidden md:grid' to 'grid' to be visible on mobile */}
        <div className="md:col-span-4 h-full grid grid-cols-2 grid-rows-3 gap-3 max-h-[450px] md:max-h-[550px]">
            {/* Image 1: Tall, left (bg1.jpg) */}
            <div className="col-span-1 row-span-2 relative rounded-tl-2xl overflow-hidden shadow-md">
              <img
                src="/bg1.jpg"
                alt="L-shape collage image 1 (tall left)"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Image 2 (was Image 4): Bottom-left of L-shape (bg2.jpg) */}
            <div className="col-start-1 row-start-3 relative rounded-bl-2xl overflow-hidden shadow-md">
              <img
                src="/bg2.jpg" 
                alt="L-shape collage image 2 (bottom left)"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Image 3 (was Image 5): Bottom-right of L-shape (bg3.jpg) */}
            <div className="col-start-2 row-start-3 relative rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-md">
              <img
                src="/bg5.jpg" 
                alt="L-shape collage image 3 (bottom right)"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
    </section>
  )
}
