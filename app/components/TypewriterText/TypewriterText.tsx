import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  text: string
  delay?: number
  onComplete?: () => void
  className?: string
}

export function TypewriterText({
  text,
  delay = 100,
  onComplete,
  className = '',
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [text, currentIndex, delay, onComplete])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  )
}
