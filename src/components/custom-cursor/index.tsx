'use client'

import { PawPrint } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const CURSOR_COLORS = {
  h1: 'text-red-600',
  button: 'orange-500',
  default: 'text-zinc-500',
} as any

export const CustomCursor = () => {
  const cursorRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const [clicked, setClicked] = useState(false)
  const [cursorColor, setCursorColor] = useState<any>('text-zinc-500')

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window?.innerWidth <= 768
  )

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseDown = () => {
      setClicked(true)

      setTimeout(() => {
        setClicked(false)
      }, 800)
    }

    // Função para verificar o tamanho da tela
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    const handleMouseOver = (e: any) => {
      const tagName = e.target.tagName.toLowerCase()
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS.default)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div className="font-bold text-3xl text-white">Loading...</div>
  }

  return !isMobile ? (
    <>
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`-translate-x-1/2 -translate-y-1/2 pointer-events-none fixed z-50 hidden size-3 rounded-full transition-all duration-300 ease-in lg:flex${cursorColor}`}
      />
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`-translate-x-1/2 -translate-y-1/2 pointer-events-none fixed z-50 size-8 rounded-full p-0 transition-all duration-500 ease-in${cursorColor} `}
      >
        <PawPrint size={32} strokeWidth={1.5} className="text-green-600" />
      </div>
    </>
  ) : (
    <div />
  )
}
