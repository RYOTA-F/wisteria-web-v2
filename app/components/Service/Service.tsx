import { Code2, Blocks, Sparkles } from 'lucide-react'

const services = [
  {
    icon: <Blocks className="w-8 h-8 text-blue-400" />,
    title: 'Web Application Development',
    description: 'Web applications built with modern technologies.',
  },
  {
    icon: <Code2 className="w-8 h-8 text-purple-400" />,
    title: 'Web Site Construction',
    description: 'Build high-speed websites at low cost.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-purple-400" />,
    title: 'EC Store Construction',
    description: 'Build an e-commerce store using Shopify.',
  },
]

export function Service() {
  return (
    <section id="service" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Service</h2>
          <p className="text-slate-300 mx-auto">
            Webサイト制作からアプリケーション開発まで、お客様のビジネスの成長をトータルでサポートいたします。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
