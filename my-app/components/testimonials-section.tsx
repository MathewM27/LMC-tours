import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      text: "Absolutely incredible experience! The tour guide was knowledgeable and the destinations were breathtaking. Mauritius Tours made our honeymoon unforgettable.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      location: "Sydney, Australia",
      rating: 5,
      text: "Professional service from start to finish. The car rental was seamless and the vehicle was in perfect condition. Highly recommend for anyone visiting Mauritius.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "The underwater sea walk was a once-in-a-lifetime experience. The team was professional and made us feel safe throughout the entire adventure.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">What People Say About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-sky-blue/20" />
                <p className="text-gray-600 italic pl-6">"{testimonial.text}"</p>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-charcoal-gray">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
