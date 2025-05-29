"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Briefcase, Car, Plane } from "lucide-react"

interface Service {
	id: string
	// Card specific
	cardTitle: string
	cardDescription: string
	cardImage: string
	cardIcon: React.ElementType
	// Hero specific
	heroLargeText: string // e.g., "LMC", "01", "Explore"
	heroHeadlineMain: string
	heroHeadlineSub: string
	heroDescription: string
	heroButtonText: string
	heroButtonIcon: React.ElementType
	heroBackgroundImage: string
}

const servicesData: Service[] = [
	{
		id: "s1",
		cardTitle: "Mauritius Tour Packages",
		cardDescription: "Unforgettable curated adventures.",
		cardImage: "/bg2.jpg",
		cardIcon: Briefcase,
		heroLargeText: "Travel",
		heroHeadlineMain: "Tour Services",
		heroHeadlineSub: "Your Adventure Awaits!",
		heroDescription:
			"Unforgettable tours, premium car rentals, and seamless airport transfers. Let LMC Tours make your Mauritian dream a reality.",
		heroButtonText: "Explore Our Services",
		heroButtonIcon: ChevronRight,
		heroBackgroundImage: "/bg1.jpg",
	},
	{
		id: "s2",
		cardTitle: "Reliable Car Rentals",
		cardDescription: "Freedom to explore in style.",
		cardImage: "/bg6.jpg",
		cardIcon: Car,
		heroLargeText: "Drive",
		heroHeadlineMain: "Car Rentals",
		heroHeadlineSub: "Explore at Your Pace",
		heroDescription:
			"Choose from a wide range of quality vehicles. Enjoy the freedom to discover every hidden gem of Mauritius with comfort and ease.",
		heroButtonText: "View Car Fleet",
		heroButtonIcon: Car,
		heroBackgroundImage: "/bg6.jpg", // Using card image as hero bg for this example
	},
	{
		id: "s3",
		cardTitle: "Airport Transfers",
		cardDescription: "Smooth, punctual, comfortable.",
		cardImage: "/bg7.jpg",
		cardIcon: Plane,
		heroLargeText: "Arrive",
		heroHeadlineMain: "Airport Transfers",
		heroHeadlineSub: "Start & End Your Journey",
		heroDescription:
			"Reliable, punctual, and comfortable airport pickup and drop-off services. Travel stress-free with LMC Tours.",
		heroButtonText: "Book Transfer",
		heroButtonIcon: Plane,
		heroBackgroundImage: "/bg7.jpg", // Using card image as hero bg
	},
]

const CAROUSEL_INTERVAL = 5000 // 5 seconds

export default function HeroSection() {
	const [activeServiceId, setActiveServiceId] = useState<string>(
		servicesData[0].id
	)
	const [contentKey, setContentKey] = useState<number>(0) // For re-triggering animations

	const currentService =
		servicesData.find((s) => s.id === activeServiceId) || servicesData[0]

	const handleSetService = useCallback((id: string) => {
		setActiveServiceId(id)
		setContentKey((prev) => prev + 1) // Trigger animation reset
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => {
			const currentIndex = servicesData.findIndex(
				(s) => s.id === activeServiceId
			)
			const nextIndex = (currentIndex + 1) % servicesData.length
			handleSetService(servicesData[nextIndex].id)
		}, CAROUSEL_INTERVAL)

		return () => clearTimeout(timer)
	}, [activeServiceId, handleSetService])

	return (
		<section
			className="min-h-screen flex flex-col md:flex-row items-center bg-cover bg-center relative text-white p-4 sm:p-8 transition-all duration-1000 ease-in-out"
			style={{ backgroundImage: `url('${currentService.heroBackgroundImage}')` }}
		>
			{/* Background Overlay */}
			<div className="absolute inset-0 bg-black/60 z-0 transition-opacity duration-1000 ease-in-out"></div>

			{/* Content Wrapper */}
			<div className="relative z-10 flex flex-col md:flex-row w-full max-w-screen-xl mx-auto gap-8 mt-16 md:mt-0">
				{/* Left Side Content - Animated */}
				<div
					key={`hero-content-${contentKey}`} // Key change triggers re-render and animation
					className="md:w-3/5 flex flex-col justify-center space-y-6 text-center md:text-left animate-fadeIn"
				>
					<span className="text-7xl md:text-9xl font-bold text-white/30 leading-none animate-slideUp">
						{currentService.heroLargeText}
					</span>
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slideUp animation-delay-200">
						{currentService.heroHeadlineMain}
						<span className="block">
							{currentService.heroHeadlineSub}
						</span>
					</h1>
					<p className="text-lg text-white/80 animate-slideUp animation-delay-400">
						{currentService.heroDescription}
					</p>
					<div className="pt-4 animate-slideUp animation-delay-600">
						<Button
							variant="outline"
							className="bg-transparent border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3 rounded-full group"
						>
							<currentService.heroButtonIcon className="mr-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
							{currentService.heroButtonText}
						</Button>
					</div>
				</div>

				{/* Right Side Content - Scrollable Service Cards */}
				<div className="md:w-2/5 flex justify-center md:justify-end items-center">
					<div className="w-full max-w-sm h-[60vh] md:h-[70vh] overflow-y-auto space-y-3 pr-2 custom-scrollbar">
						{servicesData.map((service) => (
							<div
								key={service.id}
								className={`relative rounded-xl overflow-hidden shadow-xl cursor-pointer group border-2 transition-all duration-300 ${
									activeServiceId === service.id
										? "border-white scale-105"
										: "border-transparent hover:border-white/50"
								}`}
								onClick={() => handleSetService(service.id)}
							>
								<img
									src={service.cardImage}
									alt={service.cardTitle}
									className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-between">
									<div>
										<span className="absolute top-2 right-3 text-5xl font-bold text-white/40">
											{service.id.substring(1)} {/* Display 01, 02 etc. from s1, s2 */}
										</span>
										<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<service.cardIcon className="h-12 w-12 text-white/80" />
										</div>
									</div>
									<div className="self-start mt-auto">
										<h3 className="text-xl font-semibold">
											{service.cardTitle}
										</h3>
										<p className="text-sm text-white/70">
											{service.cardDescription}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Basic custom scrollbar and animation styling */}
			<style jsx global>{`
				.custom-scrollbar::-webkit-scrollbar {
					width: 6px;
				}
				.custom-scrollbar::-webkit-scrollbar-track {
					background: rgba(255, 255, 255, 0.1);
					border-radius: 3px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb {
					background: rgba(255, 255, 255, 0.3);
					border-radius: 3px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb:hover {
					background: rgba(255, 255, 255, 0.5);
				}

				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				.animate-fadeIn {
					animation: fadeIn 0.8s ease-in-out forwards;
				}

				@keyframes slideUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-slideUp {
					animation: slideUp 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards; /* Smoother easing and slightly longer duration */
				}
				.animation-delay-200 {
					animation-delay: 0.2s;
				}
				.animation-delay-400 {
					animation-delay: 0.4s;
				}
				.animation-delay-600 {
					animation-delay: 0.6s;
				}
			`}</style>
		</section>
	)
}
