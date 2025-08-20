"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { contestData } from "@/lib/contest-data"
import { Camera, User, Trophy, Award, Star } from "lucide-react"
import PhotoModal from "./photo-modal"

export default function AwardSections() {
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openPhotoModal = (photo: any) => {
    setSelectedPhoto(photo)
    setIsModalOpen(true)
  }

  const closePhotoModal = () => {
    setIsModalOpen(false)
    setSelectedPhoto(null)
  }

  return (
    <div className="py-20 space-y-32">
      {/* Grand Prize Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Trophy className="w-16 h-16 text-yellow-500" />
          </div>
          <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xl px-8 py-3 mb-6">
            GRAND PRIZE
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            大賞
          </h2>
          <p className="text-xl text-gray-600">最優秀作品</p>
        </div>

        <Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div 
              className="relative h-[400px] lg:h-[600px] bg-black flex items-center justify-center cursor-pointer group"
              onClick={() => openPhotoModal(contestData.grandPrize)}
            >
              <img
                src={contestData.grandPrize.photo}
                alt="大賞作品"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center bg-white">
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">受賞作品</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto lg:mx-0 mb-8"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Camera className="w-5 h-5 text-orange-500" />
                      <span className="font-medium">撮影者:</span>
                    </div>
                    <p className="font-bold text-gray-800 text-lg">{contestData.grandPrize.photographer}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <User className="w-5 h-5 text-orange-500" />
                      <span className="font-medium">モデル:</span>
                    </div>
                    <p className="font-bold text-gray-800 text-lg">{contestData.grandPrize.model}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                    <p className="text-2xl font-bold text-yellow-800">賞金 50,000円</p>
                  </div>
                </div>
                
                <div className="bg-white border-2 border-orange-100 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <Star className="w-5 h-5 text-orange-500 mr-2" />
                    審査員総評
                  </h4>
                  <div className="space-y-3">
                    {contestData.grandPrize.judgeComments.map((comment, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed italic">
                        "{comment}"
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Judges' Awards Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Award className="w-14 h-14 text-purple-500" />
          </div>
          <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xl px-8 py-3 mb-6">
            JUDGE'S AWARD
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            審査員賞
          </h2>
          <p className="text-xl text-gray-600">各審査員が選んだ優秀作品</p>
        </div>

        <div className="space-y-16">
          {contestData.judgesAwards.map((award, index) => (
            <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative h-[400px] lg:h-[500px] bg-black flex items-center justify-center cursor-pointer group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                     onClick={() => openPhotoModal(award)}>
                  <img
                    src={award.photo}
                    alt={`審査員賞作品 ${index + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className={`p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-purple-50 to-blue-50 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <Badge className="bg-purple-100 text-purple-700 mb-4">審査員賞 #{index + 1}</Badge>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Camera className="w-4 h-4 text-purple-500" />
                            <span className="font-medium">撮影者:</span>
                          </div>
                          <p className="font-bold text-gray-800">{award.photographer}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <User className="w-4 h-4 text-purple-500" />
                            <span className="font-medium">モデル:</span>
                          </div>
                          <p className="font-bold text-gray-800">{award.model}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
                      <p className="text-lg font-bold text-purple-800 flex items-center justify-center">
                        <Trophy className="w-5 h-5 mr-2" />
                        賞金 30,000円
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-bold text-purple-700 mb-3">
                        選出審査員: {award.judgeName}
                      </h4>
                      <div className="border-l-4 border-purple-400 pl-4">
                        <p className="text-gray-700 leading-relaxed italic">
                          "{award.comment}"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Honorable Mentions Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Star className="w-14 h-14 text-blue-500" />
          </div>
          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl px-8 py-3 mb-6">
            HONORABLE MENTION
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            佳作
          </h2>
          <p className="text-xl text-gray-600">優秀作品30選</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 lg:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {contestData.honorableMentions.map((award, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1 bg-white"
                onClick={() => openPhotoModal(award)}
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={award.photo}
                    alt={`佳作作品 ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-3 bg-gradient-to-br from-blue-50 to-white">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <Camera className="w-3 h-3" />
                      <span className="truncate font-medium">{award.photographer}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      <span className="truncate">{award.model}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              ※ 各作品をクリックすると詳細情報をご覧いただけます
            </p>
          </div>
        </div>
      </section>

      <PhotoModal isOpen={isModalOpen} onClose={closePhotoModal} photo={selectedPhoto} />
    </div>
  )
}