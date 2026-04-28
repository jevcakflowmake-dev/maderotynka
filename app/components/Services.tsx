'use client'

import { useEffect, useRef, useState } from 'react'

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
    label: 'VacuumFit zábal',
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
      { name: 'Anticelulitidní bahenní zábal (přídavek)', duration: '30 min', price: '290 Kč' },
    ],
  },
  {
    id: 'kavitace',
    label: 'Kavitace',
    intro:
      'Neinvazivní ultrazvuková „liposukce" — cílené odbourání tukových buněk bez zákroku.',
    services: [
      { name: 'Neinvazivní liposukce — kavitace', price: 'Na dotaz' },
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState(categories[0].id)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible')
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const current = categories.find((c) => c.id === active)!

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-28 lg:py-40 bg-sand overflow-hidden relative"
    >
      <div
        className="absolute -top-20 right-0 w-[40%] h-[60%] pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(232, 197, 189, 0.4), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <p className="reveal section-tag mb-6">03 — Procedury</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end">
          <h2
            className="reveal lg:col-span-7 headline text-mocha"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
          >
            Ceník procedur <em>& sérií</em>.
          </h2>
          <p className="reveal lg:col-span-5 font-body text-mocha/70 text-base leading-relaxed font-light">
            Vyberte si jednorázovou proceduru nebo zvýhodněnou sérii. Na konzultaci
            zdarma vám pomůžu sestavit nejúčinnější plán pro vaše tělo.
          </p>
        </div>

        {/* Tab nav */}
        <div className="reveal flex flex-wrap gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full font-body text-[13px] tracking-wide transition-all duration-500 border ${
                active === c.id
                  ? 'bg-mocha text-cream border-mocha'
                  : 'bg-cream/70 text-mocha/70 border-mocha/15 hover:text-mocha hover:border-blush-deep'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Service list */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-body text-[10px] text-muted uppercase tracking-widestest mb-3">
              Kategorie
            </p>
            <h3
              className="font-display italic text-mocha mb-5"
              style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', lineHeight: '1.05' }}
            >
              {current.label}
            </h3>
            <p className="font-body text-mocha/70 text-base leading-relaxed font-light max-w-sm">
              {current.intro}
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-mocha/15">
              {current.services.map((s, i) => (
                <li
                  key={i}
                  className="group flex items-baseline justify-between gap-6 py-6 border-b border-mocha/10 transition-colors duration-300 hover:bg-cream/50 px-3 -mx-3 rounded-md"
                >
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="font-display text-gold text-sm tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display italic text-mocha text-xl lg:text-2xl leading-tight">
                        {s.name}
                      </p>
                      {s.duration && (
                        <p className="font-body text-xs text-muted mt-1 tracking-wide">
                          {s.duration}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span
                      className="hidden sm:block flex-1 border-b border-dotted border-mocha/25"
                      style={{ width: 'clamp(20px, 8vw, 100px)' }}
                      aria-hidden
                    />
                    <span className="font-display text-mocha text-xl lg:text-2xl whitespace-nowrap">
                      {s.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-16 flex flex-wrap gap-4 items-center">
          <a href="#contact" className="btn-primary">
            Rezervovat proceduru
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="font-body text-xs text-muted tracking-wide">
            Konzultace zdarma · Boskovice · Nádražní 286/8
          </p>
        </div>
      </div>
    </section>
  )
}
