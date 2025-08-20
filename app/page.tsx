"use client"

import { useEffect, useState } from "react"
import PhotoCarousel from "@/components/photo-carousel"
import AwardsCeremonySection from "@/components/awards-ceremony-section"
import AwardSections from "@/components/award-sections"
import JudgesSection from "@/components/judges-section"
import EventInfo from "@/components/event-info"
import { ChevronUp } from "lucide-react"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ヒーローセクション（カルーセル） */}
      <PhotoCarousel />
      
      {/* 表彰式案内 */}
      <AwardsCeremonySection />
      
      {/* 受賞作品展示 */}
      <AwardSections />
      
      {/* 審査員紹介 */}
      <JudgesSection />
      
      {/* イベント情報 */}
      <EventInfo />

      {/* フッター */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        {/* SNSリンク */}
        <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center">
          
            href="https://x.com/pinyo_jp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            @pinyo_jp で最新情報をチェック
          </a>
        </div>
        
        {/* コピーライト */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <p className="text-center text-sm text-gray-400">
              © 2025 ぴにょぐらむ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* トップへ戻るボタン */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="トップへ戻る"
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </main>
  )
}
