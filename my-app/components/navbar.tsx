"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, TreePalm, Phone, ChevronDown } from "lucide-react" // Changed from MapPin to PalmTree
import { Button } from "@/components/ui/button"

// Define types for the dropdown items
interface NavItem {
  href: string;
  label: string;
}

// Dropdown menu component with proper typing
const DropdownMenu = ({ title, items, isScrolled }: { title: string; items: NavItem[]; isScrolled?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={`flex items-center transition-colors duration-200 font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'}`}>
        {title}
        <ChevronDown className={`ml-1 h-4 w-4 ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`} />
      </button>
      
      {isOpen && (
        // Always glassmorphic, border color adapts
        <div className={`absolute top-full left-0 mt-1 w-48 bg-white/10 backdrop-blur-lg shadow-xl rounded-md py-1 z-10 border ${isScrolled ? 'border-gray-300/70' : 'border-white/20'}`}>
          {items.map((item: NavItem, index: number) => (
            <Link
              key={index}
              href={item.href}
              // Text color adapts
              className={`block px-4 py-2 text-sm ${isScrolled ? 'text-gray-700 hover:bg-gray-500/20 hover:text-blue-600' : 'text-black hover:bg-white/20 hover:text-white'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const tourLinks = [
    { href: "/tours", label: "All Tours" },
    { href: "/tours/day-tours", label: "Day Tours" },
    { href: "/tours/packages", label: "Tour Packages" },
  ]

  const serviceLinks = [
    { href: "/services", label: "All Services" },
    { href: "/services/airport-transfer", label: "Airport Transfer" },
    { href: "/services/custom-tours", label: "Custom Tours" },
  ]

  const aboutLinks = [
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    // Outer nav container: no background, shadow can be conditional if desired
    <nav className={`fixed top-0 w-full z-50 transition-shadow duration-300 py-4 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation - Single Tier */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Inner div: always glassmorphic */}
          <div className="w-full rounded-full flex items-center justify-between px-6 py-3 transition-all duration-300 bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">
            {/* Left section - Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <TreePalm className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-sky-400'}`} />
                <span className={`text-lg font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>LMC Tours</span>
              </Link>
            </div>
            
            {/* Middle section - Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className={`transition-colors duration-200 font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'}`}
              >
                Home
              </Link>
              <DropdownMenu title="Tours" items={tourLinks} isScrolled={isScrolled} />
              <Link
                href="/destinations"
                className={`transition-colors duration-200 font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'}`}
              >
                Destinations
              </Link>
              <Link
                href="/cars"
                className={`transition-colors duration-200 font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'}`}
              >
                Car Rentals
              </Link>
              <DropdownMenu title="Services" items={serviceLinks} isScrolled={isScrolled} />
              <DropdownMenu title="About" items={aboutLinks} isScrolled={isScrolled} />
            </div>
            
            {/* Right section - CTA Buttons */}
            <div className="flex items-center space-x-4">
              {/* Phone icon button: glassmorphic background, text color adapts */}
              <a href="tel:+230-123-4567" className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30 ${isScrolled ? 'text-green-600' : 'text-white'}`}>
                <Phone className="h-5 w-5" />
              </a>
              {/* Book Now button: styles adapt for visibility */}
              <Button className={`rounded-full px-5 py-2 transition-all duration-300 ${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white text-black hover:bg-gray-200'}`}>
                Book Now
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile nav bar: always glassmorphic */}
        <div className={`flex lg:hidden justify-between items-center rounded-xl shadow-xl p-3 transition-all duration-300 bg-white/10 backdrop-blur-lg border border-white/20`}>
          <Link href="/" className="flex items-center space-x-2">
            <TreePalm className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-sky-400'}`} />
            <span className={`text-lg font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>LMC Tours</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* Mobile Phone icon button: glassmorphic background, text color adapts */}
            <a href="tel:+230-123-4567" className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30 ${isScrolled ? 'text-green-600' : 'text-white'}`}>
              <Phone className="h-5 w-5" />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            {/* Mobile menu panel: always glassmorphic, border adapts */}
            <div className={`rounded-lg shadow-xl px-4 py-5 space-y-3 transition-all duration-300 bg-white/10 backdrop-blur-lg border ${isScrolled ? 'border-gray-300/70' : 'border-white/20'}`}>
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-500/10' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="flex justify-between items-center">
                  <span className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>Tours</span>
                  <ChevronDown className={`h-4 w-4 transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`} />
                </div>
                <div className="pl-4 mt-1 space-y-1">
                  {tourLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`block py-1 text-sm transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Add other mobile menu items here with similar styling if needed */}
              <div className="px-3 py-2">
                <Button className={`w-full rounded-md transition-all duration-300 ${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>Book Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
