"use client"

import HeroSection from "@/components/hero-section"
import PhotoCarousel from "@/components/photo-carousel"
import AwardSections from "@/components/award-sections"
import JudgesSection from "@/components/judges-section"
import EventInfo from "@/components/event-info"
import ParticipationReward from "@/components/participation-reward"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhotoCarousel />
      <AwardSections />
      <JudgesSection />
      <EventInfo />
      <ParticipationReward />

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="トップへ戻る"
        >
          ↑
        </button>
      </div>
    </main>
  )
}
