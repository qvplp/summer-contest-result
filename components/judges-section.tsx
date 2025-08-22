'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { contestData } from '@/lib/contest-data'

const JudgesSection = () => {
  const renderXLink = (xHandle: string | undefined) => {
    if (!xHandle) return null
    
    return (
      <a
        href={`https://x.com/${xHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-md hover:bg-black hover:text-white hover:border-black transition-all duration-200"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span>{'@' + xHandle}</span>
      </a>
    )
  }

  const getImageClassName = (name: string) => {
    if (name.includes('くりえみ')) {
      return 'object-contain bg-gray-50 scale-125 translate-y-2'
    }
    if (name.includes('大森')) {
      return 'object-contain bg-gray-50 scale-150 translate-y-8'
    }
    return 'object-cover'
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            審査員紹介
          </h2>
          <p className="text-gray-600 text-lg">
            本コンテストの審査を担当した5名の審査員をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contestData.judges.map((judge, index) => {
            const imageClass = getImageClassName(judge.name)
            
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-36 h-36 mb-5 overflow-hidden rounded-full ring-4 ring-gray-100 group-hover:ring-purple-200 transition-all duration-300">
                      <img
                        src={judge.photo}
                        alt={judge.name}
                        className={`w-full h-full ${imageClass}`}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">
                      {judge.name}
                    </h3>
                    <p className="text-sm text-purple-600 font-medium mb-4">
                      {judge.title}
                    </p>
                    {judge.bio ? (
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {judge.bio}
                      </p>
                    ) : null}
                    {renderXLink(judge.xHandle)}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="shadow-xl bg-gradient-to-br from-white to-purple-50/30 border-purple-100">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              審査員総評
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold text-purple-700 mb-3">
                  応募総数と印象
                </h4>
                <p>
                  今回のぴにょぐらむコラボ撮影コンテストには、全国から800点を超える素晴らしい作品が寄せられました。
                  どの作品も出演者の魅力を独自の視点で捉えており、審査員一同、選考に大変苦労いたしました。
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold text-purple-700 mb-3">
                  作品の特徴と評価ポイント
                </h4>
                <p>
                  特に印象的だったのは、技術的な完成度の高さと同時に、それぞれの作品が持つ物語性や感情の表現力です。
                  構図の工夫、光の捉え方、モデルとの距離感など、多角的な視点から評価させていただきました。
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold text-purple-700 mb-3">
                  参加者へのメッセージ
                </h4>
                <p>
                  受賞された皆様、おめでとうございます。そして、ご参加いただいた全ての皆様に心から感謝申し上げます。
                  これからも撮影会やコンテストを開催してまいりますので、ご参加お待ちしております。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default JudgesSection