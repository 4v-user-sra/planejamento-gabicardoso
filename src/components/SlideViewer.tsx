import React, { useState, useEffect } from "react"
import { presentationData } from "../data"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { RenderBlock, getSectionTheme } from "./ReportViewer"

export function SlideViewer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = presentationData.slides

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, slides.length - 1))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const currentSlideData = slides[currentIndex]
  const themeClass = getSectionTheme(currentSlideData.id, currentSlideData.slide_type)

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden font-sans p-4 md:p-8">
      {/* 16:9 Aspect Ratio Container */}
      <div className={`w-full max-w-[1600px] aspect-video relative shadow-2xl overflow-hidden ring-1 ring-zinc-800 rounded-2xl flex flex-col ${themeClass} transition-colors duration-300`}>
        <div className="w-full h-full overflow-y-auto p-8 md:p-16 flex flex-col justify-center">
          <RenderBlock slide={currentSlideData} />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-zinc-900/90 backdrop-blur-md p-2 px-4 rounded-full border border-zinc-800 z-50 shadow-2xl">
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
          title="Slide Anterior (Seta Esquerda)"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <span className="text-zinc-400 font-mono text-xs md:text-sm px-4 select-none">
          Slide <strong className="text-white">{String(currentIndex + 1).padStart(2, '0')}</strong> de <strong className="text-white">{String(slides.length).padStart(2, '0')}</strong>
        </span>

        <button 
          onClick={nextSlide}
          disabled={currentIndex === slides.length - 1}
          className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
          title="Próximo Slide (Seta Direita / Espaço)"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

