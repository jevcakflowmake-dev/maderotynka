'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

type Service = {
  name: string
  duration?: string
  price: string
}

type Category = {
  id: string
  label: string
  intro: string
  services: Service[]
}

const categories: Category[] = [
  {
    id: 'madero-telo',
    label: 'Madero těla',
    intro:
      'Manuální tvarování postavy dřevěnými nástroji — boj s celulitidou, zpevnění tkáně a aktivace lymfy.',
    services: [
      { name: 'Maderoterapie těla', duration: '50 min', price: '790 Kč' },
      { name: 'Série 5× maderoterapie', duration: '5 × 50 min', price: '3 750 Kč' },
      { name: 'Série 10× maderoterapie', duration: '10 × 50 min', price: '7 000 Kč' },
      { name: 'Madero s lymfomodelingem', duration: '80 min', price: '1 490 Kč' },
    ],
  },
  {
    id: 'madero-plet',
    label: 'Madero pleti',
    intro:
      'Jemná dřevěná masáž obličeje pro pevnost, lifting a viditelnou záři pleti — bez jehel.',
    services: [
      { name: 'Maderoterapie pleti', duration: '45 min', price: '600 Kč' },
      { name: 'Série 5× maderoterapie pleti', duration: '5 × 45 min', price: '2 750 Kč' },
      { name: 'Série 10× maderoterapie pleti', duration: '10 × 45 min', price: '5 000 Kč' },
    ],
  },
  {
    id: 'lymfomodeling',
    label: 'Lymfomodeling',
    intro:
      'Hluboké pročištění lymfatického systému, ideální po operacích a při sklonech k zadržování vody.',
    services: [
      { name: 'Lymfomodeling 1×', duration: '60–100 min dle postavy', price: '2 000 Kč' },
      { name: 'Série 3× lymfomodeling', duration: '3×', price: '5 400 Kč' },
      { name: 'Série 5× lymfomodeling', duration: '5×', price: '8 000 Kč' },
    ],
  },
  {
    id: 'vacuumfit',
    label: 'VacuumFit',
    intro:
      'Detoxikační podtlakový zábal — zrychluje úbytek centimetrů a efekt po maderoterapii.',
    services: [
      { name: 'VacuumFit zábal', duration: '40 min', price: '750 Kč' },
      { name: 'Série 5× VacuumFit', duration: '5 × 40 min', price: '3 600 Kč' },
      { name: 'Série 10× VacuumFit', duration: '10 × 40 min', price: '7 000 Kč' },
    ],
  },
  {
    id: 'bahenni',
    label: 'Bahenní zábal',
    intro:
      'Anticelulitidní termo-zábal s minerály a aktivními látkami z léčivého bahna — pro hloubkový detox.',
    services: [
      { name: 'Anticelulitidní bahenní zábal', duration: '30 min', price: '290 Kč' },
    ],
  },
  {
    id: 'kavitace',
    label: 'Kavitace',
    intro:
      'Neinvazivní ultrazvuková „liposukce" — cílené odbourání tukových buněk bez zákroku.',
    services: [{ name: 'Neinvazivní liposukce — kavitace', price: 'Na dotaz' }],
  },
]

export default function Services() {
  const [active, setActive] = useState(categories[0].id)
  const current = categories.find((c) => c.id === active)!

  return (
    <section
      id="services"
      className="py-28 lg:py-40 bg-background overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          {...fadeUp(0)}
          className="text-[11px] uppercase tracking-widestest text-foreground/60 mb-8"
        >
          02 — Procedury
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <motion.h2
            {...fadeUp(0.1)}
            className="lg:col-span-7 text-foreground tracking-tight leading-[0.95]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', fontWeight: 500 }}
          >
            Ceník <span className="italic-accent text-foreground">procedur</span>
            <br />a <span className="italic-accent text-foreground">sérií</span>.
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="lg:col-span-5 text-foreground/60 text-base leading-relaxed"
          >
            Vyberte si jednorázovou proceduru nebo zvýhodněnou sérii. Na konzultaci
            zdarma vám pomůžu sestavit plán pro vaše tělo.
          </motion.p>
        </div>

        {/* Tab nav */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap gap-2 mb-14"
        >
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full text-[13px] tracking-wide transition-all duration-500 border ${
                active === c.id
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-transparent text-foreground/60 border-border hover:text-foreground hover:border-foreground/60'
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <p className="text-[10px] text-foreground/50 uppercase tracking-widestest mb-3">
              Kategorie
            </p>
            <h3
              className="italic-accent text-foreground mb-5"
              style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', lineHeight: '1.05' }}
            >
              {current.label}
            </h3>
            <p className="text-foreground/60 text-base leading-relaxed max-w-sm">
              {current.intro}
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-border">
              {current.services.map((s, i) => (
                <li
                  key={i}
                  className="group flex items-baseline justify-between gap-6 py-6 border-b border-border transition-colors duration-300 hover:bg-secondary/40 px-3 -mx-3 rounded-md"
                >
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="text-foreground/40 text-sm tnum">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="italic-accent text-foreground text-xl lg:text-2xl leading-tight">
                        {s.name}
                      </p>
                      {s.duration && (
                        <p className="text-xs text-foreground/50 mt-1 tracking-wide">
                          {s.duration}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span
                      className="hidden sm:block flex-1 border-b border-dotted border-border"
                      style={{ width: 'clamp(20px, 8vw, 100px)' }}
                      aria-hidden
                    />
                    <span className="italic-accent text-foreground text-xl lg:text-2xl whitespace-nowrap tnum">
                      {s.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-16 flex flex-wrap gap-4 items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors duration-300"
          >
            Rezervovat proceduru
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className="text-xs text-foreground/50 tracking-wide">
            Konzultace zdarma · Boskovice · Nádražní 286/8
          </p>
        </motion.div>
      </div>
    </section>
  )
}
