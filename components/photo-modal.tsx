"use client"

import { useEffect } from "react"
import { X, Camera, User, MessageCircle } from "lucide-react"

interface PhotoModalProps {
  isOpen: boolean
  onClose: () => void
  photo: {
    photo: string
    photographer: string
    model: string
    comment?: string
    title?: string
    judgeName?: string
  }
}

export default function PhotoModal({ isOpen, onClose, photo }: PhotoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !photo) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-7xl bg-white rounded-2xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="閉じる"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* 画像エリア */}
          <div className="relative bg-black flex items-center justify-center lg:w-3/5">
            <div className="relative w-full h-[50vh] lg:h-[80vh]">
              <img
                src={photo.photo}
                alt={`${photo.title || "作品"} - ${photo.photographer}撮影`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* 情報エリア */}
          <div className="bg-white p-6 lg:p-10 lg:w-2/5 flex flex-col justify-center">
            <div className="space-y-6">
              {/* タイトル */}
              {photo.title && (
                <div className="border-b pb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{photo.title}</h3>
                  {photo.judgeName && (
                    <p className="text-sm text-gray-600 mt-1">{photo.judgeName}</p>
                  )}
                </div>
              )}

              {/* 撮影者情報 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-5 h-5 text-gray-500" />
                    <span className="text-base text-gray-600 font-medium">撮影者:</span>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{photo.photographer || "未登録"}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-gray-500" />
                    <span className="text-base text-gray-600 font-medium">モデル:</span>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{photo.model || "未登録"}</p>
                </div>
              </div>

              {/* 審査員コメント */}
              {photo.comment && photo.comment !== "" && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-800">審査員コメント</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {photo.comment}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}