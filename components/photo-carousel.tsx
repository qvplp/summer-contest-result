"use client"

import { useState } from "react"

export default function PhotoCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  
  const photos = [
    // Gallery 1-30
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/001.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/002.JPG",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/003.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/004.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/005.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/006.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/007.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/008.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/009.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/010.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/011.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/012.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/013.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/014.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/015.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/016.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/017.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/018.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/019.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/020.JPG",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/021.JPG",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/022.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/023.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/024.png",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/025.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/026.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/027.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/028.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/029.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/030.png",
    // Winners
    "https://contest001.pinyogram.com/pinyogram-contest-images/winners%3A/grand-prize.jpg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/winners%3A/judge-award-1.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/winners%3A/judge-award-2.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/winners%3A/judge-award-3.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/winners%3A/judge-award-4.jpeg",
    "https://contest001.pinyogram.com/pinyogram-contest-images/winners%3A/judge-award-%EF%BC%95.jpg"
  ]

  return (
    <>
      <section className="h-screen bg-black overflow-hidden relative">
        <style jsx>{`
          @keyframes scroll-infinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scroll-animation { 
            animation: scroll-infinite 150s linear infinite; 
          }
          .paused { 
            animation-play-state: paused; 
          }
        `}</style>

        {/* 画像カルーセル */}
        <div className="h-full relative overflow-hidden flex items-center">
          <div 
            className={`flex gap-8 scroll-animation ${isPaused ? 'paused' : ''}`}
            style={{ width: "max-content" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...photos, ...photos].map((photo, index) => (
              <div key={`photo-${index}`} className="relative flex-shrink-0 w-64 md:w-80 h-80 md:h-[480px]">
                <img
                  src={photo}
                  alt={`コンテスト作品 ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* オーバーレイ（全体に黒い半透明） */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        {/* タイトルテキスト */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                ぴにょぐらむコラボ撮影
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                コンテスト
              </span>
            </h1>
            <div className="mt-8 space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                結果発表
              </p>
              <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
                
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}