import { Car, MapPin, Camera, Plane } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: MapPin,
      title: "Guided Tours",
      description: "Expert local guides showing you the best of Mauritius with personalized attention.",
    },
    {
      icon: Car,
      title: "Car Rentals",
      description: "Modern, well-maintained vehicles for your independent exploration of the island.",
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Comfortable and reliable transfers to get you to your destination safely.",
    },
    {
      icon: Camera,
      title: "Photo Tours",
      description: "Capture stunning memories with our photography-focused tour experiences.",
    },
  ]

  return (
    <section 
      className="section-padding bg-white" // Main section background is white
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Text color changed to dark for readability on white background */}
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">We Offer Best Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From guided tours to car rentals, we provide comprehensive services to make your Mauritius experience
            unforgettable.
          </p>
        </div>

        {/* Container for gradient background behind cards */}
        <div 
          className="relative rounded-2xl p-8 md:p-12 shadow-inner bg-cover bg-center overflow-hidden text-black"  // Set background image
        >
          
          
          {/* Ensure card grid is on top of the overlay */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
            {services.map((service, index) => (
              <div 
                key={index} 
                // Glassmorphic card styling - text color adjusted for better contrast on darker overlay
                className="text-center group bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-6 border border-white/30 transition-all duration-300 hover:bg-white/30 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/40 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-black group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                <p className="text-black/80 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
