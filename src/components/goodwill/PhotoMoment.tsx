"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PhotoMoment {
  id: number
  title: string
  description: string
  image: string
}

export default function PhotoMoment() {
  const photoMoments: PhotoMoment[] = [
    {
      id: 1,
      title: "Speaking at Celo Uganda campus Connect",
      description: "We are thrilled to present a series of groundbreaking",
      image: "/Aliu-DAO.png",
    },
    {
      id: 2,
      title: "Speaking at Kenya celo Connect",
      description: "We are thrilled to present a series of groundbreaking",
      image: "/aliu-musa-prosperity.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? photoMoments.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === photoMoments.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="w-full py-16 px-8 bg-white">
      <section>
        <div className="pl-60">
          <div className="max-w-7xl mx-auto bg-[#EBEBEB] px-14 pt-5">
            <div className="grid grid-cols-2 gap-x-16">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-serif font-light text-[#6d604c] mb-4">Photo Moments</h2>
                  <p className="text-gray-600 max-w-lg">
                    We are thrilled to present a series of groundbreaking projects that have recently graduated from our
                    esteemed crypto incubator program.
                  </p>
                </div>

                <div className="bg-[#6b6048] text-white p-6 rounded">
                  <h3 className="text-xl font-medium mb-2">{photoMoments[currentIndex].title}</h3>
                  <p className="text-sm">{photoMoments[currentIndex].description}</p>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={goToPrevious}
                    className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-12 h-12 rounded-full bg-[#b29e7d] text-white flex items-center justify-center hover:bg-[#9a876a] transition-colors"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Column */}
              <div className="relative aspect-[3/4] border-2 border-gray-200 p-2 ">
                <div className="relative w-full h-60">
                  <Image
                    src={photoMoments[currentIndex].image || "/placeholder.svg"}
                    alt={photoMoments[currentIndex].title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

