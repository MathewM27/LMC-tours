"use client"

import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Fuel, Settings2, Zap, Car, Filter } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select" // Assuming ShadCN UI Select

type TransmissionType = "All" | "Manual" | "Automatic"
type CategoryType = "All" | "Economy" | "SUV" | "Compact" | "Premium SUV" | "Luxury" | "Van" | "Sedan"
type FuelType = "All" | "Petrol" | "Diesel" | "Hybrid" | "Electric"

interface CarRentalItem {
  id: string
  name: string
  image: string
  pricePerDay: number
  transmission: "Manual" | "Automatic"
  category: "Economy" | "SUV" | "Compact" | "Premium SUV" | "Luxury" | "Van" | "Sedan"
  fuelType: "Petrol" | "Diesel" | "Hybrid" | "Electric"
  seats: number
}

const baseImagePaths = ["/lol.jpeg", "/lol1.jpeg", "/lol2.webp", "/lol4.png", "/lol5.png", "/lol7.png", "/lol3.jpeg", "/lol6.jpg"];

const carsData: CarRentalItem[] = [
  { 
    id: "cr1", 
    name: "Toyota Yaris", 
    image: baseImagePaths[0], 
    pricePerDay: 850, 
    transmission: "Automatic", 
    category: "Compact", 
    fuelType: "Petrol", 
    seats: 5 
  },
  { 
    id: "cr2", 
    name: "Kia Picanto", 
    image: baseImagePaths[1], 
    pricePerDay: 750, 
    transmission: "Manual", 
    category: "Economy", 
    fuelType: "Petrol", 
    seats: 4 
  },
  { 
    id: "cr3", 
    name: "Nissan March", 
    image: baseImagePaths[2], 
    pricePerDay: 780, 
    transmission: "Manual", 
    category: "Economy", 
    fuelType: "Petrol", 
    seats: 5 
  },
  { 
    id: "cr4", 
    name: "Suzuki Swift", 
    image: baseImagePaths[3], 
    pricePerDay: 820, 
    transmission: "Manual", 
    category: "Compact", 
    fuelType: "Petrol", 
    seats: 5 
  },
  { 
    id: "cr5", 
    name: "Suzuki S-Presso", 
    image: baseImagePaths[4], 
    pricePerDay: 790, 
    transmission: "Manual", 
    category: "Economy", 
    fuelType: "Petrol", 
    seats: 5 
  },
  { 
    id: "cr6", 
    name: "Toyota Corolla", 
    image: baseImagePaths[5], 
    pricePerDay: 1150, 
    transmission: "Automatic", 
    category: "Sedan", 
    fuelType: "Hybrid", 
    seats: 5 
  },
  { 
    id: "cr7", 
    name: "Hyundai i10", 
    image: baseImagePaths[6], 
    pricePerDay: 775, 
    transmission: "Manual", 
    category: "Economy", 
    fuelType: "Petrol", 
    seats: 4 
  },
  { 
    id: "cr8", 
    name: "Mitsubishi Mirage", 
    image: baseImagePaths[7], 
    pricePerDay: 825, 
    transmission: "Automatic", 
    category: "Economy", 
    fuelType: "Petrol", 
    seats: 5 
  },
]

export default function CarRentalCollection() {
  const [selectedTransmission, setSelectedTransmission] = useState<TransmissionType>("All")
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All")
  const [selectedFuelType, setSelectedFuelType] = useState<FuelType>("All")
  const [isMounted, setIsMounted] = useState(false)

  // Set isMounted to true when component is mounted
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const transmissionOptions: TransmissionType[] = ["All", "Manual", "Automatic"]
  const categoryOptions: CategoryType[] = ["All", "Economy", "SUV", "Compact", "Premium SUV", "Luxury", "Van", "Sedan"]
  const fuelTypeOptions: FuelType[] = ["All", "Petrol", "Diesel", "Hybrid", "Electric"]

  const filteredCars = useMemo(() => {
    return carsData.filter(car =>
      (selectedTransmission === "All" || car.transmission === selectedTransmission) &&
      (selectedCategory === "All" || car.category === selectedCategory) &&
      (selectedFuelType === "All" || car.fuelType === selectedFuelType)
    )
  }, [selectedTransmission, selectedCategory, selectedFuelType])

  const getFuelIcon = (fuelType: CarRentalItem["fuelType"]) => {
    if (fuelType === "Hybrid" || fuelType === "Electric") return Zap
    return Fuel
  }

  if (!isMounted) {
    // Return a placeholder with the same structure to avoid layout shifts
    return (
      <section className="min-h-[80vh] flex flex-col items-center bg-white text-charcoal-gray py-12 sm:py-16 px-4">
        <div className="w-full max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-charcoal-gray">
            Our Car Collection
          </h2>
          <p className="text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
            Find the perfect vehicle for your Mauritian adventure. Filter by your preferences.
          </p>
          
          {/* Loading state for filter section */}
          <div className="mb-10 p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-md">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 mr-2 text-sky-600" />
              <h3 className="text-lg font-semibold text-charcoal-gray">Filter Options</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              {/* Placeholder for filters */}
              <div className="h-[72px] bg-gray-100 animate-pulse rounded-md"></div>
              <div className="h-[72px] bg-gray-100 animate-pulse rounded-md"></div>
              <div className="h-[72px] bg-gray-100 animate-pulse rounded-md"></div>
            </div>
          </div>
          
          {/* Loading state for car grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[300px] bg-gray-100 animate-pulse rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="min-h-[80vh] flex flex-col items-center bg-white text-charcoal-gray py-12 sm:py-16 px-4"
    >
      <div className="w-full max-w-screen-xl mx-auto text-center">
       
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-charcoal-gray">
          Our Car Collection
        </h2>
        <p className="text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
          Find the perfect vehicle for your Mauritian adventure. Filter by your preferences.
        </p>

        {/* Filters Section */}
        <div className="mb-10 p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-md">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 mr-2 text-sky-600" />
            <h3 className="text-lg font-semibold text-charcoal-gray">Filter Options</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor="transmission-filter" className="block text-sm font-medium text-gray-700 mb-1 text-left">Transmission</label>
              <Select value={selectedTransmission} onValueChange={(value) => setSelectedTransmission(value as TransmissionType)}>
                <SelectTrigger id="transmission-filter" className="w-full bg-white border-gray-300">
                  <SelectValue placeholder="Select Transmission" />
                </SelectTrigger>
                <SelectContent>
                  {transmissionOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1 text-left">Category</label>
              <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as CategoryType)}>
                <SelectTrigger id="category-filter" className="w-full bg-white border-gray-300">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="fuel-filter" className="block text-sm font-medium text-gray-700 mb-1 text-left">Fuel Type</label>
              <Select value={selectedFuelType} onValueChange={(value) => setSelectedFuelType(value as FuelType)}>
                <SelectTrigger id="fuel-filter" className="w-full bg-white border-gray-300">
                  <SelectValue placeholder="Select Fuel Type" />
                </SelectTrigger>
                <SelectContent>
                  {fuelTypeOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Car Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredCars.map((car) => {
              const FuelIcon = getFuelIcon(car.fuelType);
              return (
                <div
                  key={car.id}
                  className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 bg-white border border-gray-200 hover:shadow-xl hover:border-sky-500"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={car.image}
                      alt={car.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 text-left">
                    <h3 className="text-xl font-semibold mb-1 truncate text-charcoal-gray">{car.name}</h3>
                    <p className="text-xs text-sky-600 mb-3">{car.category}</p>
                    
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-4">
                      <span className="flex items-center"><Settings2 className="w-3.5 h-3.5 mr-1 text-gray-500" /> {car.transmission}</span>
                      <span className="flex items-center"><Users className="w-3.5 h-3.5 mr-1 text-gray-500" /> {car.seats} Seats</span>
                      <span className="flex items-center"><FuelIcon className="w-3.5 h-3.5 mr-1 text-gray-500" /> {car.fuelType}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold text-charcoal-gray">
                        MUR {car.pricePerDay}<span className="text-xs font-normal text-gray-500">/day</span>
                      </p>
                      <Button size="sm" className="bg-blue-600 rounded-xl hover:bg-sky-700 text-white text-xs px-3 py-1.5">
                        Rent Car
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <p className="text-gray-600 text-lg mt-8">No cars match your current filters. Try adjusting your selection!</p>
        )}
      </div>
    </section>
  )
}
