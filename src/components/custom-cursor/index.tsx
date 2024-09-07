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

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const [cursorColor, setCursorColor] = useState<any>('text-zinc-500')

  const [clicked, setClicked] = useState(false)

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

    const handleMouseOver = (e: any) => {
      const tagName = e.target.tagName.toLowerCase()

      // setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS.default)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`pointer-events-none fixed z-50 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-in${cursorColor}`}
      />
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`pointer-events-none fixed z-50 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full p-0 transition-all duration-500 ease-in${cursorColor} `}
      >
        <PawPrint size={32} strokeWidth={1.5} className="text-green-600" />
      </div>
    </>
  )
}
