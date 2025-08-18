"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { contestData } from "@/lib/contest-data"

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const allPhotos = [contestData.grandPrize, ...contestData.judgesAwards, ...contestData.excellenceAwards.slice(0, 4)]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allPhotos.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying, allPhotos.length])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-summer">受賞作品ギャラリー</h2>

        <div
          className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {allPhotos.map((photo, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src={photo.photo || "/placeholder.svg"} alt={photo.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{photo.title}</h3>
                <p className="text-sm opacity-90">撮影者: {photo.photographer}</p>
                {"model" in photo && <p className="text-sm opacity-90">モデル: {photo.model}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {allPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-pink-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
