'use client'

import { useEffect, useRef } from 'react'

const tiles = [
  {
    label: 'Privátní studio',
    sublabel: 'Boskovice · Nádražní',
    gradient: 'linear-gradient(155deg, #F2D9D2 0%, #E8C5BD 50%, #D4A5A0 100%)',
    span: 'lg:col-span-7 lg:row-span-2',
    aspect: 'aspect-[4/5] lg:aspect-auto lg:h-full',
  },
  {
    label: 'Dřevěné nástroje',
    sublabel: 'kolumbijská technika',
    gradient: 'linear-gradient(165deg, #C9A87C 0%, #A8845B 100%)',
    span: 'lg:col-span-5',
    aspect: 'aspect-[5/4]',
  },
  {
    label: 'Ošetření pleti',
    sublabel: 'jemná dřevěná masáž',
    gradient: 'linear-gradient(160deg, #FAF6F0 0%, #F2D9D2 60%, #E8C5BD 100%)',
    span: 'lg:col-span-3',
    aspect: 'aspect-[3/4]',
  },
  {
    label: 'VacuumFit',
    sublabel: 'detoxikační zábal',
    gradient: 'linear-gradient(160deg, #3D2A1E 0%, #5A4233 100%)',
    span: 'lg:col-span-2',
    aspect: 'aspect-[3/4]',
    dark: true,
  },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible')
        })
      },
      { threshold: 0.08 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-28 lg:py-40 bg-sand overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="reveal section-tag mb-6">05 — Atmosféra</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <h2
            className="reveal lg:col-span-7 headline text-mocha"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
          >
            Privátní oáza, kde <em>se zastavíte</em>.
          </h2>
          <p className="reveal lg:col-span-5 font-body text-mocha/70 text-base leading-relaxed font-light">
            Žádné rušné salony. Jen ticho, dřevo, jemné světlo a prostor jen pro vás —
            tak, jak by mělo péče o sebe vypadat.
          </p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-5 auto-rows-min">
          {tiles.map((t, i) => (
            <figure
              key={i}
              className={`relative rounded-[1.5rem] overflow-hidden group ${t.span} ${t.aspect}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                style={{ background: t.gradient }}
                aria-hidden
              />
              <div
                className="absolute inset-4 lg:inset-6 rounded-2xl border border-cream/30 pointer-events-none"
                aria-hidden
              />
              {/* gradient overlay for legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-mocha/30 via-transparent to-transparent pointer-events-none"
                aria-hidden
              />
              <figcaption
                className={`absolute bottom-6 lg:bottom-8 left-6 lg:left-8 right-6 ${
                  t.dark ? 'text-cream' : 'text-cream'
                }`}
              >
                <p className="font-body text-[10px] uppercase tracking-widestest opacity-80 mb-1">
                  {t.sublabel}
                </p>
                <p
                  className="font-display italic leading-tight"
                  style={{ fontSize: 'clamp(1.4rem, 2vw, 2rem)' }}
                >
                  {t.label}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-12 flex items-center gap-3">
          <span className="gold-divider flex-1 max-w-[120px]" aria-hidden />
          <p className="font-body text-xs text-muted tracking-widestest uppercase">
            Brzy doplníme reálnými fotkami
          </p>
          <span className="gold-divider flex-1 max-w-[120px]" aria-hidden />
        </div>
      </div>
    </section>
  )
}
