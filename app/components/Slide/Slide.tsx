import React from 'react'
import { SlideCard } from '@/app/components/SlideCard/SlideCart'

const documents = [
  {
    title: 'Web技術でデスクトップアプリ!!?',
    image: '/images/web_skill_electron.webp',
    url: 'https://speakerdeck.com/weberyota/webji-shu-de-desukutotupuapuri-electron-nosusume',
  },
  {
    title: 'ブロックチェーンを活用した\nスキル証明技術',
    image: '/images/blockcerts.webp',
    url: 'https://speakerdeck.com/weberyota/hurotukutienwohuo-yong-sitasukiruzheng-ming-ji-shu',
  },
]

export function Slide() {
  return (
    <section id="slide" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Slide</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Presentation materials from past technical conferences and meetups.
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
