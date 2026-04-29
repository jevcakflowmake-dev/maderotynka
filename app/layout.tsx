import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MaderoTýnka — Maderoterapie & Beauty studio Boskovice',
  description:
    'Privátní studio maderoterapie v Boskovicích. Kolumbijská dřevěná masáž, lymfomodeling, VacuumFit a péče o pleť.',
  keywords:
    'maderoterapie, boskovice, lymfomodeling, vakuumfit, kavitace, kosmetika, beauty studio',
  openGraph: {
    title: 'MaderoTýnka — Maderoterapie & Beauty studio Boskovice',
    description:
      'Privátní studio maderoterapie v Boskovicích. Maderoterapie, lymfomodeling, VacuumFit a péče o pleť.',
    type: 'website',
    locale: 'cs_CZ',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${instrumentSerif.variable} dark`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
