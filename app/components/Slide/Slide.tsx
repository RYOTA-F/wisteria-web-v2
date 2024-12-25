import React from 'react'
import { SlideCard } from '@/app/components/SlideCard/SlideCart'

const documents = [
  {
    title: 'Web技術でデスクトップアプリ!!?',
    image: '/images/web_skill_electron.webp',
  },
  {
    title: 'ブロックチェーンを活用した\nスキル証明技術',
    image: '/images/blockcerts.webp',
  },
]

export function Slide() {
  return (
    <section id="slide" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Slide</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We offer a comprehensive range of web development and designservices
            to help your business succeed in the digital world.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {documents.map((doc, index) => (
            <SlideCard key={index} {...doc} />
          ))}
        </div>
      </div>
    </section>
  )
}
