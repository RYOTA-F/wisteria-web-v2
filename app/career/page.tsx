import { CareerTimeline } from '../components/CareerTimeLine/CareerTimeLine'

export default function Career() {
  return (
    <div className="text-center pt-[15vh] mb-20 px-4">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
        Career
      </h2>
      <CareerTimeline />
    </div>
  )
}
