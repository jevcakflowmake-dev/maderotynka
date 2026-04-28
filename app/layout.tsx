import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MaderoTýnka — Maderoterapie Boskovice',
  description: 'Profesionální maderoterapie, lymfomodeling a neinvazivní procedury v Boskovicích. Přírodní cesta ke krásné postavě.',
  keywords: 'maderoterapie, boskovice, lymfomodeling, vakuumfit, kavitace, kosmetika',
  openGraph: {
    title: 'MaderoTýnka — Maderoterapie Boskovice',
    description: 'Přírodní cesta ke krásné postavě. Maderoterapie, lymfomodeling, VacuumFit zábal a další procedury v Boskovicích.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
