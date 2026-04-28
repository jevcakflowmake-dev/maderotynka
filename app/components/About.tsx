'use client'

import { useEffect, useRef } from 'react'

const benefits = [
  { icon: '🍑', title: 'Boj proti tukům', desc: 'Mechanická stimulace rozbíjí tukové buňky a viditelně tvaruje postavu.' },
  { icon: '💧', title: 'Lymfatický systém', desc: 'Aktivuje lymfatický oběh, odvádí toxiny a snižuje otoky.' },
  { icon: '✨', title: 'Pokožka jako hedvábí', desc: 'Hluboká masáž obnovuje kolagenová vlákna a vyhlazuje povrch pokožky.' },
  { icon: '🔥', title: 'Metabolismus', desc: 'Zrychluje lokální metabolismus a spalování v ošetřovaných partiích.' },
  { icon: '🌿', title: 'Přírodní metoda', desc: 'Pouze dřevěné nástroje — žádná chemie, žádné jehly, žádná bolest.' },
  { icon: '🧘‍♀️', title: 'Mysl & tělo', desc: 'Hluboká relaxace, snížení stresu a celkový pocit pohody po proceduře.' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger')
    els?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-36 bg-[#F7F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <p className="reveal font-body text-xs text-[#9E8A79] tracking-[0.2em] uppercase mb-4">
          01 / O proceduře
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Image */}
          <div className="reveal order-2 lg:order-1">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ aspectRatio: '3/4', background: 'linear-gradient(140deg, #EDE2D4 0%, #C4A07A 60%, #B07D55 100%)' }}
            >
              <div className="w-full h-full flex flex-col items-center justify-end pb-10 px-8">
                <div className="bg-[#F7F0E8]/80 backdrop-blur-sm rounded-2xl px-5 py-4 w-full">
                  <p className="font-body text-xs text-[#9E8A79] uppercase tracking-widest mb-1">Technika</p>
                  <p className="font-display text-[#2C1F0E] text-xl font-semibold">Maderoterapie</p>
                  <p className="font-body text-sm text-[#9E8A79] mt-1">Kolumbijská dřevěná masáž</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2
              className="reveal font-display text-[#2C1F0E] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: '0.95' }}
            >
              Co je
              <br />
              <em className="not-italic text-[#B07D55]">maderoterapie?</em>
            </h2>

            <p className="reveal font-body text-[#2C1F0E] opacity-70 leading-relaxed mb-5 max-w-lg">
              Maderoterapie je kolumbijská masážní technika prováděná speciálně tvarovanými
              dřevěnými nástroji. Mechanickým tlakem a pohybem dochází k rozrušení tukových
              ložisek, aktivaci lymfy a přetvarování postury.
            </p>

            <p className="reveal font-body text-[#2C1F0E] opacity-70 leading-relaxed mb-10 max-w-lg">
              Na rozdíl od chirurgických metod je procedura zcela neinvazivní, bezbolestná
              a nevyžaduje žádnou rekonvalescenci. Výsledky jsou patrné již po první návštěvě.
            </p>

            <a
              href="#services"
              className="reveal inline-flex items-center gap-2 font-body text-sm text-[#B07D55] border-b border-[#B07D55]/40 pb-0.5 hover:border-[#B07D55] transition-colors duration-300"
            >
              Zobrazit ceník
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Benefits grid */}
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="service-card bg-[#EDE2D4] rounded-2xl p-6"
            >
              <span className="text-3xl mb-4 block">{b.icon}</span>
              <h3 className="font-display text-[#2C1F0E] text-lg font-semibold mb-2">{b.title}</h3>
              <p className="font-body text-sm text-[#9E8A79] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
