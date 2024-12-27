import { Database, Globe, Laptop, Server } from 'lucide-react'
import { SkillCard } from '@/app/components/SkillCard/SkillCard'
import { InteractiveBackground } from '../InteractiveBackground/InteractiveBackground'

export function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      skills: [
        { name: 'TypeScript', level: 'Expert', years: 5 },
        { name: 'React', level: 'Intermediate', years: 4 },
        { name: 'Next.js', level: 'Beginner', years: 2 },
      ],
    },
    {
      name: 'Backend',
      icon: <Server className="w-6 h-6 text-green-600" />,
      skills: [
        { name: 'Node.js', level: 'Expert', years: 5 },
        { name: 'Ruby', level: 'Beginner', years: 2 },
        { name: 'Python', level: 'Beginner', years: 2 },
      ],
    },
    {
      name: 'Database',
      icon: <Database className="w-6 h-6 text-purple-600" />,
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', years: 3 },
        { name: 'MySQL', level: 'Beginner', years: 2 },
        { name: 'MongoDB', level: 'Beginner', years: 1 },
      ],
    },
    {
      name: 'Infrastructure & DevOps',
      icon: <Laptop className="w-6 h-6 text-red-600" />,
      skills: [
        { name: 'Git', level: 'Expert', years: 5 },
        { name: 'AWS', level: 'Intermediate', years: 4 },
        { name: 'Docker', level: 'Beginner', years: 2 },
      ],
    },
  ]

  return (
    <>
      <InteractiveBackground />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.name}
            name={category.name}
            icon={category.icon}
            skills={category.skills}
          />
        ))}
      </div>
    </>
  )
}
