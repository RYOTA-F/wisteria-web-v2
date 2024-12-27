import Link from 'next/link'

export function Header() {
  const menus = [
    { key: 'Home', href: '/' },
    { key: 'Service', href: '/#service' },
    { key: 'Slide', href: '/#slide' },
    { key: 'Blog', href: '/#blog' },
    { key: 'Skill', href: '/skill' },
    { key: 'Career', href: '/career' },
  ]

  return (
    <header className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
            >
              {/* eslint-disable react/no-unescaped-entities */}
              RYOTA's Portfolio
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menus.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item.key}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
