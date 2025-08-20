"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Award, Camera } from "lucide-react"

export default function AwardsCeremonySection() {
  const models = [
    {
      name: "姫野みなみ",
      photo: "https://contest001.pinyogram.com/pinyogram-contest-images/models/JPEG%E7%94%BB%E5%83%8F-4881-81B0-CA-0.jpeg",
      bgColor: "bg-pink-100",
      textColor: "text-pink-700"
    },
    {
      name: "長谷川晴奈",
      photo: "https://contest001.pinyogram.com/pinyogram-contest-images/models/JPEG%E7%94%BB%E5%83%8F-416A-98B6-41-0.jpeg",
      bgColor: "bg-purple-100",
      textColor: "text-purple-700"
    },
    {
      name: "雛なの",
      photo: "https://contest001.pinyogram.com/pinyogram-contest-images/models/IMG_8FFB18914A46-1.jpeg",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700"
    },
    {
      name: "くりえみ",
      photo: "https://contest001.pinyogram.com/pinyogram-contest-images/models/kuriemi.png",
      bgColor: "bg-green-100",
      textColor: "text-green-700"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              表彰式＆撮影会
            </span>
          </h2>
          <p className="text-xl text-gray-600">受賞者の皆様をお祝いする特別なイベント</p>
        </div>

        {/* メインカード */}
        <Card className="shadow-2xl backdrop-blur-sm bg-white/95">
          <CardContent className="p-8 md:p-12">
            {/* イベント基本情報 */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-purple-500" />
                  イベント詳細
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-3 bg-pink-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-pink-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">開催日</p>
                      <p className="text-gray-600">2025年9月9日（月）</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-3 bg-purple-50 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">表彰式</p>
                      <p className="text-gray-600">20:30〜21:30</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-3 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">会場</p>
                      <p className="text-gray-600">秋葉原 Gスタジオ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-3 bg-green-50 rounded-lg">
                    <Users className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">参加費</p>
                      <p className="text-gray-600">表彰式：無料</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">プログラム内容</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">表彰セレモニー</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• コンテストの表彰</li>
                      <li>• 大賞・審査員賞の発表</li>
                      <li>• 記念撮影</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">審査員講評</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 大賞/審査員賞作品への審査員による講評</li>
                      <li>• 審査のポイント解説</li>
                      <li>• 質疑応答</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 撮影会情報 */}
            <div className="border-t pt-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                <Camera className="w-6 h-6 mr-2 text-purple-500" />
                同日開催：セッション撮影会
              </h3>
              
              <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 mb-8">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h4 className="font-bold text-2xl text-purple-800 mb-6">セッション撮影会</h4>
                    
                    {/* 時間情報 */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="font-bold text-pink-600 mb-2">1部撮影会</p>
                        <p className="text-gray-700 font-semibold">18:30〜19:20</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="font-bold text-purple-600 mb-2">2部撮影会</p>
                        <p className="text-gray-700 font-semibold">19:30〜20:20</p>
                      </div>
                    </div>
                    
                    {/* 参加費情報 */}
                    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                      <p className="text-lg font-semibold text-gray-800 mb-4">参加費</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-center items-center space-x-4">
                          <span className="text-gray-700">1部or2部のみ</span>
                          <span className="font-bold text-xl text-purple-700">10,000円</span>
                        </div>
                        <div className="flex justify-center items-center space-x-4">
                          <span className="text-gray-700">どちらも参加</span>
                          <span className="font-bold text-xl text-purple-700">17,000円</span>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-700 font-semibold">
                          🎉 本コンテストにご参加いただいた方は上記金額から<span className="text-green-800 font-bold">20%OFF</span>
                        </p>
                        <p className="text-sm text-green-600 mt-1">※賞の受賞有無に関わらず適用されます</p>
                      </div>
                    </div>
                    
                    {/* 出演モデル - 写真付きバージョン */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <p className="text-lg font-semibold text-gray-800 mb-6">出演モデル</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {models.map((model) => (
                          <div key={model.name} className="flex flex-col items-center">
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-3 border-4 border-white shadow-xl">
                              <img
                                src={model.photo}
                                alt={model.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <Badge className={`${model.bgColor} ${model.textColor} px-4 py-2 text-sm font-semibold`}>
                              {model.name}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center pt-6">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScpvPZie8gq-s_JNtK2uubc2Z5HyRCHaziNllMiF6EjGsZyJw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-xl md:text-2xl py-6 px-12 hover:scale-105 transition-transform font-bold shadow-xl hover:shadow-2xl"
                >
                  参加申し込みはこちら
                </Button>
              </a>
              <p className="text-sm text-gray-600 mt-4">
                ※受賞者の皆様には優先的にご案内メールをお送りしております
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 注意事項 */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <h4 className="font-semibold text-gray-800 mb-3">ご参加にあたって</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• 表彰式は無料でご参加いただけます</li>
              <li>• セッション撮影会は有料となります（詳細は申込フォームにて）</li>
              <li>• 会場へのアクセス：〒111-0053 東京都台東区浅草橋５丁目３−２ 秋葉原スクエアビル ４F</li>
              <li>• お問い合わせ：account@pinyogram.com</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}