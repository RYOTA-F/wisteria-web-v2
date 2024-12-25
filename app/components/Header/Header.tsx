const menus = [
  { key: 'Home', href: '/' },
  { key: 'Service', href: '/#service' },
  { key: 'Blog', href: '/#blog' },
  { key: 'Slide', href: '/#slide' },
]

export function Header() {
  return (
    <header className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Wisteria Web
            </span>
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
