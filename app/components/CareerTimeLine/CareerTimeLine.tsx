import { CAREER } from './career'
import { CareerYears } from '../CareerYears/CareerYears'
import { InteractiveBackground } from '../InteractiveBackground/InteractiveBackground'

export function CareerTimeline() {
  return (
    <section id="career" className="py-20 text-white min-h-screen">
      <div className="fixed inset-0 h-screen w-full">
        <InteractiveBackground />
      </div>
      <div className="relative mx-auto max-w-2xl mt-40 w-full pb-[60px] pt-5 text-left px-0">
        <div className="absolute top-0 h-full w-[3px] bg-[#427bbf] left-[15%]" />
        <CareerYears items={CAREER.ITEMS} />
      </div>
    </section>
  )
}
