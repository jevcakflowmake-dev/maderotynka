'use client'

import { useEffect, useRef } from 'react'

const reviews = [
  {
    text: 'Nevěřila jsem, že bez posilovny a diet budu vypadat tak dobře. Po deseti maderách jsem ztratila 6 cm v bocích a pokožka je úplně jiná.',
    name: 'Tereza M.',
    service: 'Série maderoterapie těla',
  },
  {
    text: 'Výborný přístup, příjemná atmosféra a hlavně výsledky. Doporučuji každé ženě, která chce přírodní cestu ke krásné postavě.',
    name: 'Barbora K.',
    service: 'Premium balíček',
  },
  {
    text: 'Přišla jsem s otoky po operaci a lymfomodeling byl přesně to pravé. Rychlý nástup efektu, paní je velmi profesionální.',
    name: 'Jana Š.',
    service: 'Lymfomodeling',
  },
]

export default function Reviews() {
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
      id="reviews"
      ref={sectionRef}
      className="py-28 lg:py-40 bg-cream overflow-hidden relative"
    >
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(232, 197, 189, 0.35) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <p className="reveal section-tag mb-6">06 — Recenze</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <h2
            className="reveal lg:col-span-7 headline text-mocha"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
          >
            Slova <em>klientek</em>, které u nás našly cestu.
          </h2>
          <div className="reveal lg:col-span-5 flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="#C9A87C"
                  aria-hidden
                >
                  <path d="M10 1l2.63 5.33L18.5 7.18l-4.25 4.14 1 5.84L10 14.27l-5.25 2.89 1-5.84L1.5 7.18l5.87-.85L10 1z" />
                </svg>
              ))}
            </div>
            <p className="font-body text-sm text-mocha/70 font-light">
              5,0 z hodnocení klientek
            </p>
          </div>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="soft-card relative bg-sand/60 border border-blush/15 rounded-3xl p-8 lg:p-9 flex flex-col justify-between min-h-[320px]"
            >
              {/* Quote mark */}
              <span
                className="absolute top-6 right-7 font-display italic text-blush-deep/40 leading-none select-none"
                style={{ fontSize: '5rem' }}
                aria-hidden
              >
                "
              </span>

              <blockquote
                className="font-display italic text-mocha leading-snug font-light relative z-10"
                style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.4rem)' }}
              >
                {r.text}
              </blockquote>

              <figcaption className="mt-8 pt-6 border-t border-mocha/10">
                <p className="font-body text-mocha font-medium text-sm tracking-wide">
                  {r.name}
                </p>
                <p className="font-body text-xs text-muted mt-0.5 tracking-wide">
                  {r.service}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA to Instagram */}
        <div className="reveal flex flex-col items-center text-center gap-5 pt-10 border-t border-mocha/10">
          <p className="font-display italic text-mocha/80 text-2xl">
            Více recenzí najdete na Instagramu.
          </p>
          <a
            href="https://instagram.com/_maderotynka"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
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
        </div>
      </div>
    </section>
  )
}
