import { Hero } from '@/app/components/Hero/Hero'
import { Service } from '@/app/components/Service/Service'
import { Blog } from '@/app/components/Blog/Blog'
import { Slide } from '@/app/components/Slide/Slide'

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Blog />
      <Slide />
    </>
  )
}
