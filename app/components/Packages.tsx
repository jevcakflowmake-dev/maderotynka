'use client'

import { useEffect, useRef } from 'react'

const packages = [
  {
    name: 'Klasický',
    includes: 'Maderoterapie těla + maderoterapie pleti',
    duration: '105 min',
    price: '1 200 Kč',
    highlight: false,
    badge: null,
  },
  {
    name: 'Premium',
    includes: 'Madero těla s lymfomodelingem + VacuumFit / Kavitace',
    duration: '95 min',
    price: '2 000 Kč',
    highlight: true,
    badge: 'Nejoblíbenější',
  },
  {
    name: 'Lymfo zábal',
    includes: 'Maderoterapie těla + VacuumFit zábal',
    duration: '80–90 min',
    price: '1 300 Kč',
    highlight: false,
    badge: null,
  },
  {
    name: 'Kavitace balíček',
    includes: 'Maderoterapie těla + kavitace',
    duration: '105 min',
    price: '1 350 Kč',
    highlight: false,
    badge: null,
  },
  {
    name: 'Pleť + VacuumFit',
    includes: 'Maderoterapie pleti + VacuumFit zábal',
    duration: '45 min',
    price: '1 150 Kč',
    highlight: false,
    badge: null,
  },
]

export default function Packages() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible')
        })
      },
      { threshold: 0.12 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="packages" ref={sectionRef} className="py-24 lg:py-36 bg-[#F7F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="reveal font-body text-xs text-[#9E8A79] tracking-[0.2em] uppercase mb-4">
          03 / Balíčky
        </p>
        <h2
          className="reveal font-display text-[#2C1F0E] mb-4"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: '0.95' }}
        >
          Kombinované
          <br />
          <em className="not-italic text-[#B07D55]">balíčky</em>
        </h2>
        <p className="reveal font-body text-[#9E8A79] text-base mb-14 max-w-md">
          Větší efekt za výhodnou cenu. Kombinujeme procedury tak, aby výsledky byly co nejrychlejší.
        </p>

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`service-card relative rounded-2xl p-7 flex flex-col justify-between ${
                p.highlight
                  ? 'bg-[#B07D55] text-[#F7F0E8]'
                  : 'bg-[#EDE2D4] text-[#2C1F0E]'
              }`}
            >
              {p.badge && (
                <span
                  className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-body font-medium tracking-widest uppercase"
                  style={{ background: '#2C1F0E', color: '#B07D55' }}
                >
                  {p.badge}
                </span>
              )}

              <div>
                <h3
                  className={`font-display text-2xl font-semibold mb-3 ${
                    p.highlight ? 'text-[#F7F0E8]' : 'text-[#2C1F0E]'
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`font-body text-sm leading-relaxed mb-5 ${
                    p.highlight ? 'text-[#F7F0E8]/80' : 'text-[#9E8A79]'
                  }`}
                >
                  {p.includes}
                </p>
              </div>

              <div className="flex items-end justify-between mt-4 pt-4 border-t border-current/10">
                <div>
                  <p
                    className={`font-body text-xs uppercase tracking-widest mb-1 ${
                      p.highlight ? 'text-[#F7F0E8]/60' : 'text-[#9E8A79]'
                    }`}
                  >
                    Délka
                  </p>
                  <p
                    className={`font-body text-sm font-medium ${
                      p.highlight ? 'text-[#F7F0E8]' : 'text-[#2C1F0E]'
                    }`}
                  >
                    {p.duration}
                  </p>
                </div>
                <p
                  className={`font-display text-2xl font-semibold ${
                    p.highlight ? 'text-[#F7F0E8]' : 'text-[#B07D55]'
                  }`}
                >
                  {p.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
