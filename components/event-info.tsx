"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Trophy, ArrowRight } from "lucide-react"

export default function EventInfo() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              関連イベント情報
            </span>
          </h2>
          <p className="text-gray-600 text-lg">コンテスト関連の撮影会や次回開催について</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 撮影会情報カード */}
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">今後の撮影会スケジュール</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-purple-800 text-lg">9月16日（月・祝）</p>
                      <p className="text-purple-700 font-semibold mt-1">一般参加者向け撮影会</p>
                    </div>
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
              </div>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScpvPZie8gq-s_JNtK2uubc2Z5HyRCHaziNllMiF6EjGsZyJw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all">
                  撮影会の詳細・申込はこちら
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* 次回開催予告カード */}
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-3xl font-bold mb-2">Coming Soon</h4>
                  <p className="text-lg">Next Photo Contest</p>
                </div>
              </div>
            </div>
            
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">次回コンテスト開催予告</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl">
                  <p className="text-2xl font-bold text-center text-gray-700 mb-2">
                    Coming Soon
                  </p>
                  <p className="text-center text-gray-600">
                    詳細は後日発表いたします
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}