import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"

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
        url: "https://contest001.pinyogram.com/pinyogram-contest-images/gallery/001.jpg",
        width: 1200,
        height: 630,
        alt: "Pinyogram Summer Photo Contest 2025"
      }
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    title: "ぴにょぐらむコラボ撮影会結果発表",
    description: "夏のポートレートコンテストの受賞作品を発表！",
    images: ["https://contest001.pinyogram.com/pinyogram-contest-images/gallery/001.jpg"],
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
