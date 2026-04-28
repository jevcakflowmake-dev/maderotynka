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
    <section id="reviews" ref={sectionRef} className="py-24 lg:py-36 bg-[#EDE2D4] overflow-hidden relative">
      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(176,125,85,0.12) 0%, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(176,125,85,0.08) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <p className="reveal font-body text-xs text-[#9E8A79] tracking-[0.2em] uppercase mb-4">
          04 / Recenze
        </p>
        <h2
          className="reveal font-display text-[#2C1F0E] mb-14"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: '0.95' }}
        >
          Co říkají
          <br />
          <em className="not-italic text-[#B07D55]">klientky</em>
        </h2>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="service-card bg-[#F7F0E8] rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#B07D55" aria-hidden>
                      <path d="M10 1l2.63 5.33L18.5 7.18l-4.25 4.14 1 5.84L10 14.27l-5.25 2.89 1-5.84L1.5 7.18l5.87-.85L10 1z"/>
                    </svg>
                  ))}
                </div>

                <p className="font-body text-[#2C1F0E] text-sm leading-relaxed opacity-80 mb-6 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#EDE2D4] pt-4">
                <p className="font-display text-[#2C1F0E] font-semibold text-base">{r.name}</p>
                <p className="font-body text-xs text-[#9E8A79] mt-0.5">{r.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Instagram */}
        <div className="reveal text-center">
          <p className="font-body text-sm text-[#9E8A79] mb-5">Více recenzí najdete na Instagramu</p>
          <a
            href="https://instagram.com/_maderotynka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#2C1F0E] text-[#F7F0E8] font-body font-medium text-sm hover:bg-[#B07D55] transition-colors duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @_maderotynka
          </a>
        </div>
      </div>
    </section>
  )
}
