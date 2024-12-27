import { SocialLinks } from '../SocialLinks/SocialLinks'

export function Footer() {
  return (
    <footer className="bg-slate-900/50 py-8 text-slate-400 text-center">
      <SocialLinks />
      <p className="mt-8">© 2024 Wisteria Web</p>
    </footer>
  )
}
