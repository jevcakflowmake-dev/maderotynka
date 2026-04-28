'use client'

import { useEffect, useRef } from 'react'

const packages = [
  {
    name: 'Klasický',
    includes: ['Maderoterapie těla', 'Maderoterapie pleti'],
    duration: '105 min',
    price: '1 200 Kč',
    highlight: false,
    badge: null,
  },
  {
    name: 'Premium',
    includes: ['Madero těla s lymfomodelingem', 'VacuumFit nebo kavitace'],
    duration: '95 min',
    price: '2 000 Kč',
    highlight: true,
    badge: 'Nejoblíbenější',
  },
  {
    name: 'Lymfo zábal',
    includes: ['Maderoterapie těla', 'VacuumFit zábal'],
    duration: '80–90 min',
    price: '1 300 Kč',
    highlight: false,
    badge: null,
  },
  {
    name: 'Kavitace balíček',
    includes: ['Maderoterapie těla', 'Kavitace'],
    duration: '105 min',
    price: '1 350 Kč',
    highlight: false,
    badge: null,
  },
  {
    name: 'Pleť & VacuumFit',
    includes: ['Maderoterapie pleti', 'VacuumFit zábal'],
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
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="py-28 lg:py-40 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="reveal section-tag mb-6">04 — Balíčky</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <h2
            className="reveal lg:col-span-7 headline text-mocha"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
          >
            Kombinace, které <em>zrychlí výsledek</em>.
          </h2>
          <p className="reveal lg:col-span-5 font-body text-mocha/70 text-base leading-relaxed font-light">
            Procedury, které se navzájem podporují, dávají dohromady viditelnější
            efekt než kterákoliv samostatně. A za výhodnější cenu.
          </p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`soft-card relative rounded-3xl p-8 lg:p-9 flex flex-col justify-between border min-h-[340px] ${
                p.highlight
                  ? 'bg-blush-soft border-blush-deep/40 shadow-soft-blush'
                  : 'bg-sand/60 border-blush/15'
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-7 px-4 py-1.5 rounded-full text-[10px] font-body tracking-widestest uppercase bg-mocha text-cream">
                  {p.badge}
                </span>
              )}

              <div>
                <h3
                  className="font-display italic text-mocha leading-tight mb-5"
                  style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)' }}
                >
                  {p.name}
                </h3>

                <ul className="space-y-2.5 mb-8">
                  {p.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm text-mocha/75 font-light leading-relaxed"
                    >
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full bg-blush-deep shrink-0"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-end justify-between pt-5 border-t border-mocha/10">
                <div>
                  <p className="font-body text-[10px] uppercase tracking-widestest text-muted mb-1">
                    Délka
                  </p>
                  <p className="font-body text-sm text-mocha">{p.duration}</p>
                </div>
                <p className="font-display text-mocha text-3xl lg:text-4xl leading-none">
                  {p.price}
                </p>
              </div>
            </article>
          ))}

          {/* CTA card */}
          <article className="rounded-3xl p-8 lg:p-9 flex flex-col justify-between min-h-[340px] bg-mocha text-cream">
            <div>
              <p className="font-body text-[10px] uppercase tracking-widestest text-blush mb-4">
                Na míru
              </p>
              <h3
                className="font-display italic leading-tight mb-4"
                style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)' }}
              >
                Vlastní balíček?
              </h3>
              <p className="font-body text-sm text-cream/75 font-light leading-relaxed">
                Napište mi a dáme dohromady kombinaci přesně pro vaše tělo
                a vaši rezervu času.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 font-body text-sm text-cream border-b border-cream/40 pb-1 self-start hover:border-cream transition-colors duration-300"
            >
              Domluvit konzultaci
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
