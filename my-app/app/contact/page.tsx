"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-blue to-sky-blue/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get in touch with us to plan your perfect Mauritius experience
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal-gray mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-sky-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-gray mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Royal Road
                      <br />
                      Port Louis, Mauritius
                      <br />
                      11328
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-sky-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-gray mb-1">Phone</h3>
                    <p className="text-gray-600">+230 123 4567</p>
                    <p className="text-gray-600">+230 987 6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-sky-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-gray mb-1">Email</h3>
                    <p className="text-gray-600">info@mauritiustours.com</p>
                    <p className="text-gray-600">bookings@mauritiustours.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-sky-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-gray mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-3">
                <a
                  href="https://wa.me/230123456789"
                  className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
                <a href="tel:+230123456789" className="flex items-center justify-center w-full btn-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-charcoal-gray mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-gray mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-gray mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-gray mb-2">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+230 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-gray mb-2">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue"
                      >
                        <option value="">Select a subject</option>
                        <option value="tour-booking">Tour Booking</option>
                        <option value="car-rental">Car Rental</option>
                        <option value="airport-transfer">Airport Transfer</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-gray mb-2">Message *</label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-charcoal-gray mb-8 text-center">Find Us</h2>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-600">Interactive Map of Mauritius would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
