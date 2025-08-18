"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { contestData } from "@/lib/contest-data"

export default function JudgesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-summer">審査員紹介</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {contestData.judges.map((judge, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={judge.photo || "/placeholder.svg"}
                    alt={judge.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{judge.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{judge.title}</p>
                <Button variant="outline" size="sm">
                  プロフィールを見る
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">総評</h3>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                今回のPinyogram Summer Photo Contest 2024には、全国から500点を超える素晴らしい作品が寄せられました。
                どの作品も夏の魅力を独自の視点で捉えており、審査員一同、選考に大変苦労いたしました。
              </p>
              <p className="leading-relaxed mb-4">
                特に印象的だったのは、技術的な完成度の高さと同時に、それぞれの作品が持つ物語性や感情の表現力です。
                夏という季節の持つエネルギーと美しさを、多様な角度から表現していただいた参加者の皆様に心から感謝申し上げます。
              </p>
              <p className="leading-relaxed">
                受賞された皆様、おめでとうございます。そして、ご参加いただいた全ての皆様、ありがとうございました。
                来年もより多くの素晴らしい作品との出会いを楽しみにしております。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
