import type { Metadata } from 'next'
import { Header } from '@/app/components/Header/Header'
import { Footer } from '@/app/components/Footer/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wisteria Web',
  description: 'Wisteria Web',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
