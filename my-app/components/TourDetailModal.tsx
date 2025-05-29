"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Star, MapPin, Calendar, Phone, Mail, User, ArrowRight } from "lucide-react"

interface Tour {
  id: number | string // Allow string for IDs like "ft1"
  title: string
  image: string
  price: number
  rating: number
  description: string // Short description for card
  detailedDescription: string // Longer description for modal
  // Add any other fields from your Tour interface in featured-tours.tsx
}

interface TourDetailModalProps {
  tour: Tour | null
  isOpen: boolean
  onCloseAction: () => void
}

export default function TourDetailModal({ tour, isOpen, onCloseAction }: TourDetailModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    date: "",
  })

  useEffect(() => {
    if (tour) {
      setFormData(prev => ({ ...prev, location: tour.title }))
    }
  }, [tour])

  if (!isOpen || !tour) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Modal Booking Submitted:", { tour: tour.title, ...formData })
    alert(`Booking request for ${tour.title} received!`)
    onCloseAction() // Close modal after submission
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Tour Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col overflow-y-auto">
          <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
            <Image src={tour.image} alt={tour.title} layout="fill" objectFit="cover" />
          </div>
          <h2 className="text-3xl font-bold text-charcoal-gray mb-2">{tour.title}</h2>
          <div className="flex items-center mb-3 text-sm">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="font-medium text-charcoal-gray">{tour.rating.toFixed(1)}</span>
            <span className="text-gray-500 mx-2">|</span>
            <span className="text-2xl font-bold text-sky-600">${tour.price}</span>
            <span className="text-gray-500 ml-1">per person</span>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm mb-1">
            {tour.description} {/* Short description can be here too or just detailed */}
          </p>
          <p className="text-gray-600 leading-relaxed text-sm flex-grow">
            {tour.detailedDescription}
          </p>
        </div>

        {/* Right Side: Booking Form */}
        <div className="w-full md:w-1/2 p-6 bg-gray-50 flex flex-col justify-center overflow-y-auto">
          <h3 className="text-2xl font-semibold text-charcoal-gray text-center mb-6">Book This Tour</h3>
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            {[
              { name: "name", placeholder: "Full Name", type: "text", icon: User },
              { name: "email", placeholder: "Email Address", type: "email", icon: Mail },
              { name: "phone", placeholder: "Phone Number", type: "tel", icon: Phone },
              { name: "location", placeholder: "Pickup Location", type: "text", icon: MapPin },
              { name: "date", placeholder: "Preferred Date", type: "date", icon: Calendar },
            ].map((field) => (
              <div key={field.name} className="relative">
                <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleInputChange}
                  required={field.name !== "location"}
                  className="pl-10 h-12 w-full border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-md text-charcoal-gray"
                />
              </div>
            ))}
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-3 rounded-md group"
            >
              Confirm Booking
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>

        {/* Close Button */}
        <button
          onClick={onCloseAction}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
