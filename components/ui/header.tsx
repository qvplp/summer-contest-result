"use client"

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // メニューアイテム
  const menuItems = [
    { label: '表彰式＆撮影会', href: '#awards-ceremony' },
    { label: '受賞作品', href: '#grand-prize' },
    { label: '審査員紹介', href: '#judges-introduction' },
    { label: '関連イベント情報', href: '#related-events' },
  ]

  // スムーススクロール
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 60 // ヘッダーの高さ分オフセット（小さくした）
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <a 
              href="#top" 
              onClick={(e) => handleSmoothScroll(e, '#top')}
              className="flex items-center"
            >
              <img 
                src="https://contest001.pinyogram.com/pinyogram-contest-images/image_2236.png" 
                alt="ぴにょぐらむコラボ撮影コンテスト" 
                className="h-8 md:h-10 w-auto"
              />
            </a>
          </div>

          {/* デスクトップメニュー - lg以上で表示 */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="px-2 xl:px-3 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            {/* 申し込みボタン */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScpvPZie8gq-s_JNtK2uubc2Z5HyRCHaziNllMiF6EjGsZyJw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:scale-105 transition-transform whitespace-nowrap">
                参加申込はこちら
              </Button>
            </a>
          </div>

          {/* モバイルメニューボタン - lg未満で表示 */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="メニューを開く"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* モバイルメニュー - lg未満でのみ表示 */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-200">
            {menuItems.map((item) => (
              <a
              
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            {/* モバイル用申し込みボタン */}
            <div className="px-4 pt-4 pb-2">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScpvPZie8gq-s_JNtK2uubc2Z5HyRCHaziNllMiF6EjGsZyJw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:scale-105 transition-transform">
                  参加申込はこちら
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}