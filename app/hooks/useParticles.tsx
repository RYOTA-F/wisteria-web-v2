import { useCallback } from 'react'
import { Particle } from '@/app/types/particle'
import { connectParticles, moveParticle } from '../utils/particle'

export function useParticles(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  mouseRef: React.RefObject<{ x: number; y: number }>,
) {
  const particles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return []

    const particlesCount = (canvas.width * canvas.height) / 10000 // より少ない粒子数
    return Array.from(
      { length: particlesCount },
      (): Particle => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5, // よりサイズを小さく
        density: Math.random() * 20 + 1, // 密度を下げる
        angle: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.002, // 速度を大幅に下げる
      }),
    )
  }, [])

  let particleArray: Particle[] = []

  const initParticles = useCallback(() => {
    particleArray = particles()
  }, [particles])

  const animateParticles = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particleArray.forEach((particle) => {
        particle.angle += particle.speed

        // より小さな移動量
        particle.baseX += Math.cos(particle.angle) * 0.2
        particle.baseY += Math.sin(particle.angle) * 0.2

        moveParticle(particle, mouseRef.current)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(148, 130, 255, 0.3)' // より透明に
        ctx.fill()
      })

      connectParticles(ctx, particleArray)
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return { initParticles, animateParticles }
}
