import Link from 'next/link'
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
          <Link
            href="/skill"
            className="w-[100px] py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all hover:scale-105"
          >
            Skill
          </Link>
          <Link
            href="/career"
            className="w-[100px] py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all hover:scale-105"
          >
            Career
          </Link>
        </div>
        <Link href="/#service" className="mt-16 animate-bounce block">
          <ChevronDown className="mx-auto text-white/50" size={32} />
        </Link>
      </div>
    </section>
  )
}
