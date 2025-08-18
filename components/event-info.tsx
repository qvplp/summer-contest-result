import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

export default function EventInfo() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-summer">関連イベント</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">表彰式 & 撮影会</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-pink-500" />
                  <span>日時: 2024年9月9日（月）20:30〜</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <span>会場: 東京都渋谷区 Pinyogram Studio</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <span>参加費: 無料（表彰式のみ）</span>
                </div>
              </div>
              <Button className="w-full gradient-summer text-white">詳細を見る</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">撮影会情報</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">9月2日（月）団体撮影会</p>
                  <p className="text-sm text-blue-600">受賞者限定特別撮影会</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-800 mb-2">9月16日（月・祝）団体撮影会</p>
                  <p className="text-sm text-purple-600">一般参加者向け撮影会</p>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                申し込みはこちら
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
