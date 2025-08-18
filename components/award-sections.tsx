"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { contestData } from "@/lib/contest-data"
import { Camera, User, FileText } from "lucide-react"

export default function AwardSections() {
  return (
    <div className="py-16 space-y-20">
      {/* Grand Prize */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-yellow-500 text-white text-lg px-6 py-2 mb-4">GRAND PRIZE</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-summer mb-4">大賞</h2>
        </div>

        <Card className="overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-[600px]">
              <Image
                src={contestData.grandPrize.photo || "/placeholder.svg"}
                alt={contestData.grandPrize.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Camera className="w-5 h-5" />
                  <span>撮影者: {contestData.grandPrize.photographer}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>モデル: {contestData.grandPrize.model}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-800">
                  <FileText className="w-5 h-5" />
                  <span className="font-semibold">作品名: {contestData.grandPrize.title}</span>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 font-semibold">賞金 50,000円 + Pinyogram撮影会参加券</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">審査員コメント</h3>
                  <div className="space-y-3">
                    {contestData.grandPrize.judgeComments.map((comment, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {comment}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Judges' Awards */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-gray-400 text-white text-lg px-6 py-2 mb-4">JUDGE'S AWARD</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-summer mb-4">審査員賞</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contestData.judgesAwards.map((award, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image src={award.photo || "/placeholder.svg"} alt={award.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Camera className="w-4 h-4" />
                    <span>撮影者: {award.photographer}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>モデル: {award.model}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-semibold">
                    <FileText className="w-4 h-4" />
                    <span>作品名: {award.title}</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-800 text-sm font-semibold">賞金 30,000円 + Pinyogram撮影会参加券</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">選出審査員: {award.judgeName}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">審査員コメント: {award.comment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Excellence Awards */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-orange-500 text-white text-lg px-6 py-2 mb-4">EXCELLENCE AWARD</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-summer mb-4">優秀賞</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contestData.excellenceAwards.map((award, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src={award.photo || "/placeholder.svg"} alt={award.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Camera className="w-4 h-4" />
                    <span>撮影者: {award.photographer}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>モデル: {award.model}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-semibold">
                    <FileText className="w-4 h-4" />
                    <span>作品名: {award.title}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Honorable Mentions */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-blue-500 text-white text-lg px-6 py-2 mb-4">HONORABLE MENTION</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-summer mb-4">佳作</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contestData.honorableMentions.map((award, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-40">
                <Image src={award.photo || "/placeholder.svg"} alt={award.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Camera className="w-4 h-4" />
                    <span>撮影者: {award.photographer}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>モデル: {award.model}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-semibold">
                    <FileText className="w-4 h-4" />
                    <span>作品名: {award.title}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
