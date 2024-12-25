import { ChevronDown } from 'lucide-react'
import { InteractiveBackground } from '@/app/components/InteractiveBackground/InteractiveBackground'
import { Title } from '@/app/components/Title/Title'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-purple-900/20" />
      <InteractiveBackground />
      <div className="relative max-w-7xl mx-auto pt-[15%] px-4 sm:px-6 lg:px-8 text-center z-10">
        <Title />
        <div className="flex justify-center gap-4 pt-20">
          <a
            href="#career"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all hover:scale-105"
          >
            Career
          </a>
          <a
            href="#skills"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all hover:scale-105"
          >
            Skill
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <ChevronDown className="mx-auto text-white/50" size={32} />
        </div>
      </div>
    </section>
  )
}
