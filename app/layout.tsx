import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MaderoTýnka — Maderoterapie & Beauty studio Boskovice',
  description:
    'Privátní studio maderoterapie v Boskovicích. Kolumbijská dřevěná masáž, lymfomodeling, VacuumFit a péče o pleť — jemná cesta k vaší přirozené kráse.',
  keywords:
    'maderoterapie, boskovice, lymfomodeling, vakuumfit, kavitace, kosmetika, beauty studio',
  openGraph: {
    title: 'MaderoTýnka — Maderoterapie & Beauty studio Boskovice',
    description:
      'Jemná cesta k vaší přirozené kráse. Maderoterapie, lymfomodeling, VacuumFit a péče o pleť v Boskovicích.',
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
    <html lang="cs" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
