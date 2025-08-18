"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check } from "lucide-react"

export default function ParticipationReward() {
  const [copied, setCopied] = useState(false)
  const couponCode = "CONTEST2024"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="bg-green-500 text-white text-lg px-6 py-2 mb-4">全参加者特典</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-summer mb-4">参加賞</h2>
        </div>

        <Card className="shadow-2xl border-0 gradient-summer">
          <CardContent className="p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Pinyogram撮影会 20%OFF クーポン</h3>
            <p className="text-lg mb-8 opacity-90">コンテストにご参加いただいた全ての皆様に感謝を込めて</p>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
              <p className="text-sm mb-2 opacity-80">クーポンコード:</p>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-2xl font-mono font-bold tracking-wider">{couponCode}</span>
                <Button
                  onClick={handleCopy}
                  variant="secondary"
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      コピーしました！
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      コピーする
                    </>
                  )}
                </Button>
              </div>
            </div>

            <p className="text-sm opacity-80">
              ※ 有効期限: 2024年12月31日まで
              <br />※ 他のクーポンとの併用はできません
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
