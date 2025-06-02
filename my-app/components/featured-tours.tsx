'use client'
import { Button } from "@/components/ui/button"
import { Star, Heart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import the TourDetailModal
const TourDetailModal = dynamic(() => import("./TourDetailModal"), {
  ssr: false, // Set to false if it relies on window or other browser-only APIs during render
  // You can add a loading component here if needed:
  // loading: () => <p>Loading modal...</p> 
})

interface Tour {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  detailedDescription: string;
}

export default function FeaturedTours() {
  const tours: Tour[] = [
    {
      id: 1,
      title: "Chamarel Seven Colored Earths",
      image: "/bg3.jpg",
      price: 245,
      rating: 4.8,
      description: "Witness the unique geological formation of rainbow-hued dunes and the stunning Chamarel Waterfall.",
      detailedDescription: "A visit to Chamarel offers more than just the Seven Colored Earths; it's an encounter with a natural phenomenon. The varying shades of red, brown, violet, green, blue, purple, and yellow are a result of volcanic activity and mineral composition. Nearby, the Chamarel Waterfall, one of Mauritius' highest, plunges dramatically into a lush gorge. The area also includes the Chamarel Adventure Park and curious giant tortoises.",
    },
    {
      id: 2,
      title: "Île aux Cerfs",
      image: "/bg8.jpg",
      price: 270,
      rating: 4.9,
      description: "Relax on pristine white sandy beaches, swim in turquoise lagoons, and enjoy various water sports.",
      detailedDescription: "Île aux Cerfs is a picturesque island paradise off the east coast of Mauritius. Famous for its sandy beaches, beautiful lagoon, and a wide range of activities from snorkeling and parasailing to golf on its championship course. It's the perfect spot for a day of sun, sea, and fun, accessible by boat trips that often include lunch and drinks.",
    },
    {
      id: 3,
      title: "Black River Gorges National Park",
      image: "/bg9.jpg",
      price: 230,
      rating: 4.7,
      description: "Explore lush native forests, discover endemic wildlife, and enjoy breathtaking viewpoints and hiking trails.",
      detailedDescription: "Covering a vast area of the island's interior, Black River Gorges National Park is a haven for nature lovers and hikers. It protects much of Mauritius' remaining native forests and provides sanctuary for endemic wildlife, including the Mauritian flying fox and several rare bird species. Well-marked trails lead to stunning viewpoints, waterfalls, and through diverse ecosystems.",
    },
    {
      id: 4,
      title: "Le Morne Brabant",
      image: "/bg10.jpg",
      price: 160,
      rating: 4.9,
      description: "Hike this iconic UNESCO World Heritage site, rich in history and offering panoramic ocean views.",
      detailedDescription: "Le Morne Brabant is a majestic basaltic monolith with a summit that offers breathtaking views. This UNESCO World Heritage site holds significant cultural and historical importance, having served as a refuge for runaway slaves. Guided hikes to the summit are challenging but rewarding, revealing stunning vistas of the southwestern lagoon and surrounding landscapes.",
    },
    {
      id: 5,
      title: "Pamplemousses Botanical Garden",
      image: "/bg11.jpg",
      price: 225,
      rating: 4.6,
      description: "Discover a vast collection of indigenous and exotic plants, including giant water lilies.",
      detailedDescription: "Officially known as Sir Seewoosagur Ramgoolam Botanical Garden, this is one of the oldest botanical gardens in the Southern Hemisphere. It's renowned for its giant Victoria Amazonica water lilies, an extensive collection of palm trees, spice garden, and various endemic and exotic plant species. A tranquil escape offering a glimpse into the rich botanical heritage of Mauritius.",
    },
    {
      id: 6,
      title: "Port Louis Water Front",
      image: "/bg12.jpg",
      price: 215,
      rating: 4.5,
      description: "Immerse yourself in the vibrant atmosphere, find local crafts, spices, and taste Mauritian street food.",
      detailedDescription: "The Caudan Waterfront in Port Louis is a lively hub for shopping, dining, and entertainment. It blends historical buildings with modern architecture, offering a wide array of boutiques, craft markets, cinemas, and restaurants overlooking the harbor. It's a great place to experience the city's pulse, enjoy local and international cuisine, and find unique souvenirs.",
    },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const handleOpenModal = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  return (
    <>
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">Explore Iconic Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We will take you to the most breathtaking spots in Mauritius, from natural wonders to cultural landmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl bg-white/95 shadow-md  p-7">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-44 w-full group">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-2.5 py-1.5 rounded-lg flex items-center text-xs backdrop-blur-sm">
                    <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400 mr-1.5" />
                    <span>{tour.rating.toFixed(1)}</span>
                  </div>
                  <button className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-red-500/70 hover:text-white transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-charcoal-gray mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{tour.description}</p>

                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div>
                      <span className="text-2xl font-bold text-charcoal-gray">${tour.price}</span>
                    </div>
                    <Button 
                      className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl px-5 py-2.5 text-sm font-medium"
                      onClick={() => handleOpenModal(tour)}
                    >
                      See More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TourDetailModal tour={selectedTour} isOpen={isModalOpen} onCloseAction={handleCloseModal} />
    </>
  )
}
