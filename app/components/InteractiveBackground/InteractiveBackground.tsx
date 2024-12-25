'use client'

import { useEffect, useRef } from 'react'
import { useParticles } from '@/app/hooks/useParticles'

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const { initParticles, animateParticles } = useParticles(canvasRef, mouseRef)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    handleResize()
    animateParticles()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [initParticles, animateParticles])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
