interface Skill {
  name: string
  level: string
  years: number
}

interface SkillCardProps {
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

export function SkillCard({ name, icon, skills }: SkillCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-blue-400'
      case 'Intermediate':
        return 'bg-green-400'
      case 'Advanced':
        return 'bg-purple-400'
      case 'Expert':
        return 'bg-red-400'
      default:
        return 'bg-gray-400'
    }
  }

  return (
    <div className="bg-slate-700/30 text-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-slate-700/50 rounded-lg">{icon}</div>
        <h3 className="text-xl font-bold ">{name}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{skill.name}</span>
              <span
                className={`text-sm px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}
              >
                {skill.level}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getLevelColor(skill.level)}`}
                style={{
                  width: `${
                    skill.level === 'Expert'
                      ? '100%'
                      : skill.level === 'Advanced'
                        ? '80%'
                        : skill.level === 'Intermediate'
                          ? '60%'
                          : '40%'
                  }`,
                }}
              />
            </div>
            <p className="text-sm text-gray-500">
              {skill.years} years experience
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
