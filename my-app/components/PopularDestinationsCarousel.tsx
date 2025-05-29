"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { PlayCircle, X } from "lucide-react" // Play and Close icons

interface Destination {
  id: string
  name: string
  tagline: string
  videoId: string
  thumbnail: string
}

const destinationsData: Destination[] = [
  {
    id: "vid1",
    name: "Mauritius Drone Adventures",
    tagline: "Breathtaking Aerial Views",
    videoId: "K0v1aIIqiTg",
    thumbnail: "https://img.youtube.com/vi/K0v1aIIqiTg/hqdefault.jpg",
  },
  {
    id: "vid2",
    name: "Discover Mauritius Island",
    tagline: "A Journey Through Paradise",
    videoId: "XyjNld32cAQ",
    thumbnail: "https://img.youtube.com/vi/XyjNld32cAQ/hqdefault.jpg",
  },
  {
    id: "vid3",
    name: "Mauritius Travel Guide",
    tagline: "Your Ultimate Island Companion",
    videoId: "p3GnIe2suOc",
    thumbnail: "https://img.youtube.com/vi/p3GnIe2suOc/hqdefault.jpg",
  },
  {
    id: "vid4",
    name: "Top Things To Do In Mauritius",
    tagline: "Unforgettable Island Experiences",
    videoId: "uTM1ThFqu-Y",
    thumbnail: "https://img.youtube.com/vi/uTM1ThFqu-Y/hqdefault.jpg",
  },
  // Add more videos if needed
]

export default function PopularDestinationsCarousel() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false)

  const handlePlayVideo = useCallback((videoId: string) => {
    setPlayingVideoId(videoId)
    setShowVideoPlayer(true)
  }, [])

  const handleClosePlayer = useCallback(() => {
    setPlayingVideoId(null)
    setShowVideoPlayer(false)
  }, [])

  return (
    <section
      className="relative min-h-[40vh] md:min-h-[40vh] flex flex-col justify-center items-center bg-cover bg-center text-white p-4 sm:p-8 transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url('/bg1.jpg')` }} // Static blurred background
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

      {/* Video Player Overlay */}
      {showVideoPlayer && playingVideoId && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <button
              onClick={handleClosePlayer}
              className="absolute -top-3 -right-3 md:top-2 md:right-2 z-30 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
              aria-label="Close video player"
            >
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Content Wrapper - Visible when video player is not active */}
      <div
        className={`relative z-10 w-full max-w-screen-xl mx-auto text-center transition-opacity duration-500 ${
          showVideoPlayer ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-shadow-md">
          Mauritius Video Gallery
        </h2>
        <p className="text-lg text-white/80 mb-10 md:mb-12 max-w-2xl mx-auto text-shadow-sm">
          Experience the vibrant beauty and culture of Mauritius through our curated video collection.
        </p>

        {/* Horizontal Scrollable Video Cards */}
        <div className="w-full flex overflow-x-auto space-x-4 md:space-x-6 pb-4 custom-horizontal-scrollbar-dark">
          {destinationsData.map((destination) => (
            <div
              key={destination.id}
              className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] h-[220px] md:h-[240px] group bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/20"
              onClick={() => handlePlayVideo(destination.videoId)}
            >
              <Image
                src={destination.thumbnail}
                alt={destination.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex flex-col justify-between items-start">
                <div className="flex-grow flex items-center justify-center w-full">
                  <PlayCircle className="h-16 w-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg md:text-xl font-semibold text-white text-left">
                    {destination.name}
                  </h3>
                  <p className="text-xs text-white/70 text-left">{destination.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .custom-horizontal-scrollbar-dark::-webkit-scrollbar {
          height: 8px;
        }
        .custom-horizontal-scrollbar-dark::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .custom-horizontal-scrollbar-dark::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        .custom-horizontal-scrollbar-dark::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .text-shadow-md {
          text-shadow: 0px 2px 4px rgba(0,0,0,0.5);
        }
        .text-shadow-sm {
          text-shadow: 0px 1px 3px rgba(0,0,0,0.4);
        }
      `}</style>
    </section>
  )
}
