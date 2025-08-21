import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import HeaderNavigation from "@/components/ui/header"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "ぴにょぐらむコラボ撮影会結果発表",
  description: "ぴにょぐらむコラボ撮影会結果発表の結果発表ページです。ぴにょぐらむコラボ撮影会の受賞作品をご覧いただけます。",
  keywords: "Pinyogram, フォトコンテスト, 夏, ポートレート, 写真コンテスト, 2025, ぴにょぐらむ",
  authors: [{ name: "Pinyogram" }],
  generator: "Next.js",
  openGraph: {
    title: "ぴにょぐらむコラボ撮影会 - 結果発表",
    description: "ぴにょぐらむコラボ撮影会 - 結果発表",
    url: "https://result.pinyogram.com",
    siteName: "Pinyogram Contest",
    images: [
      {
        url: "https://contest001.pinyogram.com/pinyogram-contest-images/ogp/Screenshot%202025-08-21%20at%201.33.25.png",
        width: 1200,
        height: 630,
        alt: "ぴにょぐらむコラボ撮影会 - 結果発表"
      }
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    title: "ぴにょぐらむコラボ撮影コンテスト結果発表",
    description: "ぴにょぐらむコラボ撮影コンテストの受賞作品を発表！",
    images: ["https://contest001.pinyogram.com/pinyogram-contest-images/ogp/Screenshot%202025-08-21%20at%201.33.25.png"],
    site: "@pinyo_jp",
    creator: "@pinyo_jp"
  },
  alternates: {
    canonical: "https://result.pinyogram.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans antialiased">
        <HeaderNavigation />
        {children}
      </body>
    </html>
  )
}