import { CAREER } from './career'
import { CareerYears } from '../CareerYears/CareerYears'
import { InteractiveBackground } from '../InteractiveBackground/InteractiveBackground'

export function CareerTimeline() {
  return (
    <section id="career" className="text-white min-h-screen">
      <div className="fixed inset-0 h-screen w-full -z-10">
        <InteractiveBackground />
      </div>
      <CareerYears items={CAREER.ITEMS} />
    </section>
  )
}
