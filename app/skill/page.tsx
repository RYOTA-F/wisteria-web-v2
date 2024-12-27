import { Skills } from '../components/Skills/Skills'

export default function Skill() {
  return (
    <div className="min-h-screen text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-center text-5xl font-bold py-12 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
          Skill
        </h1>
        <Skills />
      </div>
    </div>
  )
}
