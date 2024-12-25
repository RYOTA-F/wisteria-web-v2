'use client'

import { useState } from 'react'
import { TypewriterText } from '@/app/components/TypewriterText/TypewriterText'

export function Title() {
  const [showSecondText, setShowSecondText] = useState(false)

  return (
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
      <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text animate-gradient block">
        <TypewriterText
          text="Web Developer"
          delay={150}
          onComplete={() => setShowSecondText(true)}
        />
      </span>
      <span className="leading-relaxed mt-4 block text-white/90">
        {showSecondText && <TypewriterText text="RYOTA" delay={150} />}
      </span>
    </h1>
  )
}
