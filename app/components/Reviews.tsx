'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const reviews = [
  {
    text: 'Nevěřila jsem, že bez posilovny a diet budu vypadat tak dobře. Po deseti maderách jsem ztratila 6 cm v bocích a pokožka je úplně jiná.',
    name: 'Tereza M.',
    service: 'Série maderoterapie těla',
    initial: 'T',
  },
  {
    text: 'Výborný přístup, příjemná atmosféra a hlavně výsledky. Doporučuji každé ženě, která chce přírodní cestu ke krásné postavě.',
    name: 'Barbora K.',
    service: 'Premium balíček',
    initial: 'B',
  },
  {
    text: 'Přišla jsem s otoky po operaci a lymfomodeling byl přesně to pravé. Rychlý nástup efektu, paní je velmi profesionální.',
    name: 'Jana Š.',
    service: 'Lymfomodeling',
    initial: 'J',
  },
]

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-28 lg:py-40 bg-background overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          {...fadeUp(0)}
          className="text-[11px] uppercase tracking-widestest text-foreground/60 mb-8"
        >
          05 — Recenze
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <motion.h2
            {...fadeUp(0.1)}
            className="lg:col-span-7 text-foreground tracking-tight leading-[0.95]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', fontWeight: 500 }}
          >
            Slova <span className="italic-accent text-blush-deep">klientek</span>,
            <br />
            které u nás našly <span className="italic-accent text-blush-deep">cestu</span>.
          </motion.h2>
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-5 flex items-center gap-3"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-foreground"
                  aria-hidden
                >
                  <path d="M10 1l2.63 5.33L18.5 7.18l-4.25 4.14 1 5.84L10 14.27l-5.25 2.89 1-5.84L1.5 7.18l5.87-.85L10 1z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-foreground/60">
              <span className="text-foreground">5,0</span> z hodnocení klientek
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              {...fadeUp(0.1 + i * 0.07)}
              className="liquid-glass rounded-3xl p-8 lg:p-9 flex flex-col justify-between min-h-[320px]"
            >
              <span
                className="absolute top-6 right-7 italic-accent text-foreground/15 leading-none select-none"
                style={{ fontSize: '5rem' }}
                aria-hidden
              >
                "
              </span>

              <blockquote
                className="italic-accent text-foreground leading-snug relative z-10"
                style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.3rem)' }}
              >
                {r.text}
              </blockquote>

              <figcaption className="mt-8 pt-6 border-t border-border flex items-center gap-3 relative z-10">
                <div className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-xs text-foreground/80">
                  {r.initial}
                </div>
                <div>
                  <p className="text-foreground text-sm tracking-wide">{r.name}</p>
                  <p className="text-xs text-foreground/50 mt-0.5 tracking-wide">
                    {r.service}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col items-center text-center gap-5 pt-10 border-t border-border"
        >
          <p className="italic-accent text-foreground/80 text-2xl">
            Více recenzí najdete na Instagramu.
          </p>
          <a
            href="https://instagram.com/_maderotynka"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass inline-flex items-center gap-2 px-6 py-3 rounded-full text-foreground text-sm hover:text-foreground/80 transition-colors duration-300"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @_maderotynka
          </a>
        </motion.div>
      </div>
    </section>
  )
}
