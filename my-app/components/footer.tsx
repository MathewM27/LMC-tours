import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-sky-blue" />
              <span className="text-lg font-bold text-charcoal-gray">Mauritius Tours</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted partner for unforgettable Mauritius experiences. Discover paradise with our expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sky-blue hover:text-sky-blue/80">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-sky-blue hover:text-sky-blue/80">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-sky-blue hover:text-sky-blue/80">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-charcoal-gray mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Tours", "Destinations", "Car Rentals", "Services", "Gallery"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-600 hover:text-sky-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-charcoal-gray mb-4">Services</h3>
            <ul className="space-y-2">
              {["Airport Transfers", "Private Tours", "Car Rentals", "Hotel Bookings", "Event Transport"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-charcoal-gray mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-blue" />
                <span className="text-gray-600 text-sm">+230 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sky-blue" />
                <span className="text-gray-600 text-sm">info@mauritiustours.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-sky-blue mt-1" />
                <span className="text-gray-600 text-sm">Port Louis, Mauritius</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Mauritius Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
