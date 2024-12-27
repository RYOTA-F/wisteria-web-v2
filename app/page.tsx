import { Hero } from '@/app/components/Hero/Hero'
import { Service } from '@/app/components/Service/Service'
import { Slide } from '@/app/components/Slide/Slide'
import { Blog } from '@/app/components/Blog/Blog'

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Slide />
      <Blog />
    </>
  )
}
