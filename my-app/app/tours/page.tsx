"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, Users, Star, ArrowRight, Search } from "lucide-react"
import Image from "next/image"

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Adventure", "Cultural", "Marine", "Nature", "Family"]

  const tours = [
    {
      id: 1,
      title: "South Coast Adventure",
      image: "/placeholder.svg?height=300&width=400",
      price: 85,
      duration: "8 hours",
      rating: 4.8,
      reviews: 124,
      category: "Adventure",
      description: "Explore the dramatic south coast with its rugged cliffs and pristine beaches.",
      highlights: ["Seven Colored Earths", "Chamarel Waterfall", "Black River Gorges"],
    },
    {
      id: 2,
      title: "North Island Discovery",
      image: "/placeholder.svg?height=300&width=400",
      price: 75,
      duration: "6 hours",
      rating: 4.9,
      reviews: 89,
      category: "Cultural",
      description: "Discover the cultural heart of Mauritius with visits to local markets and temples.",
      highlights: ["Port Louis Market", "Aapravasi Ghat", "Caudan Waterfront"],
    },
    {
      id: 3,
      title: "Underwater Sea Walk",
      image: "/placeholder.svg?height=300&width=400",
      price: 120,
      duration: "4 hours",
      rating: 4.7,
      reviews: 156,
      category: "Marine",
      description: "Walk on the ocean floor and experience marine life up close.",
      highlights: ["Underwater Walking", "Marine Life Viewing", "Professional Guide"],
    },
    {
      id: 4,
      title: "Ile aux Cerfs Island",
      image: "/placeholder.svg?height=300&width=400",
      price: 95,
      duration: "7 hours",
      rating: 4.6,
      reviews: 203,
      category: "Nature",
      description: "Paradise island with crystal clear waters and white sandy beaches.",
      highlights: ["Catamaran Cruise", "BBQ Lunch", "Water Sports"],
    },
    {
      id: 5,
      title: "Family Fun Day",
      image: "/placeholder.svg?height=300&width=400",
      price: 65,
      duration: "5 hours",
      rating: 4.8,
      reviews: 78,
      category: "Family",
      description: "Perfect family adventure with activities for all ages.",
      highlights: ["Casela Nature Park", "Giant Tortoises", "Safari Adventure"],
    },
    {
      id: 6,
      title: "Dolphin Watching",
      image: "/placeholder.svg?height=300&width=400",
      price: 110,
      duration: "6 hours",
      rating: 4.9,
      reviews: 167,
      category: "Marine",
      description: "Swim with dolphins in their natural habitat.",
      highlights: ["Dolphin Encounter", "Snorkeling", "Benitiers Island"],
    },
  ]

  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || tour.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-blue to-sky-blue/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tour Packages</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover the beauty of Mauritius with our carefully crafted tour experiences
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search tours..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "btn-primary" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="card group cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sunshine-yellow text-charcoal-gray px-3 py-1 rounded-full text-sm font-medium">
                      {tour.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{tour.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{tour.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-charcoal-gray mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1 h-1 bg-sky-blue rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {tour.reviews} reviews
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-sky-blue">${tour.price}</span>
                      <span className="text-gray-500 text-sm ml-1">per person</span>
                    </div>
                    <Button className="btn-primary">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tours found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
