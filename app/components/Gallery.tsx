'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const tiles = [
  {
    label: 'Privátní studio',
    sublabel: 'Boskovice · Nádražní',
    span: 'lg:col-span-7 lg:row-span-2',
    aspect: 'aspect-[4/5] lg:aspect-auto lg:h-full',
    bg: 'linear-gradient(155deg, #F2D9D2 0%, #E8C5BD 50%, #D4A5A0 100%)',
    dark: false,
  },
  {
    label: 'Dřevěné nástroje',
    sublabel: 'kolumbijská technika',
    span: 'lg:col-span-5',
    aspect: 'aspect-[5/4]',
    bg: 'linear-gradient(165deg, #C9A87C 0%, #5A4233 100%)',
    dark: true,
  },
  {
    label: 'Ošetření pleti',
    sublabel: 'jemná dřevěná masáž',
    span: 'lg:col-span-3',
    aspect: 'aspect-[3/4]',
    bg: 'linear-gradient(160deg, #FAF6F0 0%, #F2D9D2 60%, #E8C5BD 100%)',
    dark: false,
  },
  {
    label: 'VacuumFit',
    sublabel: 'detoxikační zábal',
    span: 'lg:col-span-2',
    aspect: 'aspect-[3/4]',
    bg: 'linear-gradient(160deg, #3D2A1E 0%, #5A4233 100%)',
    dark: true,
  },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 lg:py-40 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          {...fadeUp(0)}
          className="text-[11px] uppercase tracking-widestest text-foreground/60 mb-8"
        >
          04 — Atmosféra
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <motion.h2
            {...fadeUp(0.1)}
            className="lg:col-span-7 text-foreground tracking-tight leading-[0.95]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', fontWeight: 500 }}
          >
            Privátní oáza,
            <br />
            kde se <span className="italic-accent text-blush-deep">zastavíte</span>.
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="lg:col-span-5 text-foreground/60 text-base leading-relaxed"
          >
            Žádné rušné salony. Jen ticho, dřevo, jemné světlo a prostor jen pro vás —
            tak, jak by mělo péče o sebe vypadat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-5 auto-rows-min">
          {tiles.map((t, i) => (
            <motion.figure
              key={i}
              {...fadeUp(0.1 + i * 0.05)}
              className={`relative rounded-2xl overflow-hidden group border border-border ${t.span} ${t.aspect}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                style={{ background: t.bg }}
                aria-hidden
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: t.dark
                    ? 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 70%)'
                    : 'linear-gradient(to top, rgba(61,42,30,0.45) 0%, transparent 70%)',
                }}
                aria-hidden
              />
              <figcaption
                className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 right-6 text-cream"
              >
                <p className="text-[10px] uppercase tracking-widestest text-cream/85 mb-1">
                  {t.sublabel}
                </p>
                <p
                  className="italic-accent text-cream leading-tight"
                  style={{ fontSize: 'clamp(1.4rem, 2vw, 2rem)' }}
                >
                  {t.label}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.5)}
          className="mt-12 flex items-center gap-3"
        >
          <span className="flex-1 max-w-[120px] h-px bg-border" aria-hidden />
          <p className="text-xs text-foreground/40 tracking-widestest uppercase">
            Brzy doplníme reálnými fotkami
          </p>
          <span className="flex-1 max-w-[120px] h-px bg-border" aria-hidden />
        </motion.div>
      </div>
    </section>
  )
}
