"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Fuel, Settings, Star, ArrowRight, Search, Calendar } from "lucide-react"
import Image from "next/image"

export default function CarsPage() {
  const [searchFilters, setSearchFilters] = useState({
    pickupDate: "",
    returnDate: "",
    location: "",
  })

  const cars = [
    {
      id: 1,
      name: "Toyota Corolla",
      image: "/placeholder.svg?height=200&width=300",
      category: "Economy",
      seats: 5,
      transmission: "Manual",
      fuel: "Petrol",
      pricePerDay: 35,
      rating: 4.6,
      reviews: 89,
      features: ["Air Conditioning", "Bluetooth", "GPS Navigation"],
    },
    {
      id: 2,
      name: "Nissan X-Trail",
      image: "/placeholder.svg?height=200&width=300",
      category: "SUV",
      seats: 7,
      transmission: "Automatic",
      fuel: "Petrol",
      pricePerDay: 65,
      rating: 4.8,
      reviews: 124,
      features: ["4WD", "Air Conditioning", "Bluetooth", "GPS Navigation"],
    },
    {
      id: 3,
      name: "Hyundai i20",
      image: "/placeholder.svg?height=200&width=300",
      category: "Compact",
      seats: 5,
      transmission: "Manual",
      fuel: "Petrol",
      pricePerDay: 30,
      rating: 4.5,
      reviews: 67,
      features: ["Air Conditioning", "Bluetooth"],
    },
    {
      id: 4,
      name: "Toyota Fortuner",
      image: "/placeholder.svg?height=200&width=300",
      category: "Premium SUV",
      seats: 7,
      transmission: "Automatic",
      fuel: "Diesel",
      pricePerDay: 85,
      rating: 4.9,
      reviews: 156,
      features: ["4WD", "Leather Seats", "Sunroof", "GPS Navigation"],
    },
    {
      id: 5,
      name: "Suzuki Swift",
      image: "/placeholder.svg?height=200&width=300",
      category: "Economy",
      seats: 5,
      transmission: "Manual",
      fuel: "Petrol",
      pricePerDay: 28,
      rating: 4.4,
      reviews: 45,
      features: ["Air Conditioning", "Bluetooth"],
    },
    {
      id: 6,
      name: "Honda CR-V",
      image: "/placeholder.svg?height=200&width=300",
      category: "SUV",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      pricePerDay: 70,
      rating: 4.7,
      reviews: 98,
      features: ["4WD", "Air Conditioning", "Bluetooth", "GPS Navigation"],
    },
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-blue to-sky-blue/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Car Rentals</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore Mauritius at your own pace with our reliable and well-maintained vehicles
          </p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-charcoal-gray mb-4">Find Your Perfect Car</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Pickup Location"
                  className="pl-10"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({ ...searchFilters, location: e.target.value })}
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="date"
                  placeholder="Pickup Date"
                  className="pl-10"
                  value={searchFilters.pickupDate}
                  onChange={(e) => setSearchFilters({ ...searchFilters, pickupDate: e.target.value })}
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="date"
                  placeholder="Return Date"
                  className="pl-10"
                  value={searchFilters.returnDate}
                  onChange={(e) => setSearchFilters({ ...searchFilters, returnDate: e.target.value })}
                />
              </div>
              <Button className="btn-primary">
                <Search className="mr-2 h-5 w-5" />
                Search Cars
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="card group cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sunshine-yellow text-charcoal-gray px-3 py-1 rounded-full text-sm font-medium">
                      {car.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{car.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">{car.name}</h3>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {car.seats} seats
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Settings className="h-4 w-4 mr-1" />
                      {car.transmission}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Fuel className="h-4 w-4 mr-1" />
                      {car.fuel}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-charcoal-gray mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {car.features.map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-500 text-sm">{car.reviews} reviews</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-sky-blue">${car.pricePerDay}</span>
                      <span className="text-gray-500 text-sm ml-1">per day</span>
                    </div>
                    <Button className="btn-primary">
                      Rent Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
