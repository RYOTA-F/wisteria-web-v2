import Link from 'next/link'
import { Facebook, Github, Twitter } from 'lucide-react'

export function SocialLinks() {
  return (
    <div className="flex gap-10 items-center justify-center">
      <Link
        href="https://www.facebook.com/ryota.fujishima.9"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-400 transition-colors duration-200 rounded-full hover:bg-gray-800"
        aria-label="Facebook"
      >
        <Facebook size={32} />
      </Link>
      <Link
        href="https://x.com/WEBERYOTA"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-400 transition-colors duration-200 rounded-full hover:bg-gray-800"
        aria-label="X (Twitter)"
      >
        <Twitter size={32} />
      </Link>
      <Link
        href="https://github.com/RYOTA-F"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-400 transition-colors duration-200 rounded-full hover:bg-gray-800"
        aria-label="GitHub"
      >
        <Github size={32} />
      </Link>
    </div>
  )
}
