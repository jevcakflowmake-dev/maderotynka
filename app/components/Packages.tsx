'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

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
    name: 'Kavitace',
    includes: ['Maderoterapie těla', 'Kavitace'],
    duration: '105 min',
    price: '1 350 Kč',
    highlight: false,
    badge: null,
  },
]

export default function Packages() {
  return (
    <section
      id="packages"
      className="py-28 lg:py-40 bg-background overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          {...fadeUp(0)}
          className="text-[11px] uppercase tracking-widestest text-foreground/60 mb-8"
        >
          03 — Balíčky
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <motion.h2
            {...fadeUp(0.1)}
            className="lg:col-span-7 text-foreground tracking-tight leading-[0.95]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', fontWeight: 500 }}
          >
            Kombinace, které <span className="italic-accent text-blush-deep">zrychlí</span>
            <br />
            váš <span className="italic-accent text-blush-deep">výsledek</span>.
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="lg:col-span-5 text-foreground/60 text-base leading-relaxed"
          >
            Procedury, které se navzájem podporují, dávají dohromady viditelnější
            efekt než kterákoliv samostatně. A za výhodnější cenu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {packages.map((p, i) => (
            <motion.article
              key={p.name}
              {...fadeUp(0.1 + i * 0.05)}
              className={`relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between min-h-[360px] transition-all duration-500 ${
                p.highlight
                  ? 'bg-foreground text-background border border-foreground'
                  : 'liquid-glass text-foreground'
              }`}
            >
              {p.badge && (
                <span
                  className={`absolute -top-3 left-7 px-3 py-1.5 rounded-full text-[10px] tracking-widestest uppercase ${
                    p.highlight
                      ? 'bg-background text-foreground border border-foreground/20'
                      : 'bg-foreground text-background'
                  }`}
                >
                  {p.badge}
                </span>
              )}

              <div>
                <h3
                  className="italic-accent leading-tight mb-5"
                  style={{ fontSize: 'clamp(1.7rem, 2.4vw, 2.2rem)' }}
                >
                  {p.name}
                </h3>

                <ul className="space-y-2.5 mb-8">
                  {p.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-sm leading-relaxed ${
                        p.highlight ? 'text-background/80' : 'text-foreground/70'
                      }`}
                    >
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${
                          p.highlight ? 'bg-background' : 'bg-foreground'
                        }`}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`flex items-end justify-between pt-5 border-t ${
                  p.highlight ? 'border-background/20' : 'border-border'
                }`}
              >
                <div>
                  <p
                    className={`text-[10px] uppercase tracking-widestest mb-1 ${
                      p.highlight ? 'text-background/60' : 'text-foreground/50'
                    }`}
                  >
                    Délka
                  </p>
                  <p
                    className={`text-sm ${
                      p.highlight ? 'text-background' : 'text-foreground'
                    }`}
                  >
                    {p.duration}
                  </p>
                </div>
                <p className="italic-accent text-3xl lg:text-4xl leading-none tnum">
                  {p.price}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Custom CTA */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-3xl border border-border"
        >
          <div>
            <p className="text-[10px] uppercase tracking-widestest text-foreground/50 mb-2">
              Na míru
            </p>
            <h3
              className="italic-accent text-foreground"
              style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)' }}
            >
              Chcete vlastní kombinaci? Domluvíme se.
            </h3>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/40 text-foreground text-sm hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Domluvit konzultaci
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
        </motion.div>
      </div>
    </section>
  )
}
