import { type Particle } from '@/app/types/particle'

export function moveParticle(
  particle: Particle,
  mouse: { x: number; y: number },
) {
  const dx = mouse.x - particle.x
  const dy = mouse.y - particle.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  const forceDirectionX = dx / distance
  const forceDirectionY = dy / distance
  const maxDistance = 120 // マウスの影響範囲を広げる
  const force = (maxDistance - distance) / maxDistance
  const directionX = forceDirectionX * force * particle.density
  const directionY = forceDirectionY * force * particle.density

  if (distance < maxDistance) {
    particle.x -= directionX * 0.5 // マウスからの逃げる速度を遅く
    particle.y -= directionY * 0.5
  } else {
    if (particle.x !== particle.baseX) {
      const dx = particle.x - particle.baseX
      particle.x -= dx / 50 // より緩やかな戻り
    }
    if (particle.y !== particle.baseY) {
      const dy = particle.y - particle.baseY
      particle.y -= dy / 50 // より緩やかな戻り
    }
  }
}

export function connectParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
) {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 120) {
        // 接続距離を広げる
        const opacity = (1 - distance / 120) * 0.5 // より透明な線
        ctx.strokeStyle = `rgba(148, 130, 255, ${opacity})`
        ctx.lineWidth = 0.6 // より細い線
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }
}
