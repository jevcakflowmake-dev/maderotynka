'use client'

import { useEffect, useRef } from 'react'

const benefits = [
  {
    title: 'Tvarování postavy',
    desc: 'Mechanická stimulace dřevěnými nástroji rozbíjí tukové buňky a viditelně modeluje siluetu.',
    iconPath: 'M12 2v20M2 12h20',
  },
  {
    title: 'Aktivace lymfy',
    desc: 'Hluboká masáž rozproudí lymfatický oběh, odvádí toxiny a zmírňuje otoky.',
    iconPath: 'M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9zm9-5v10M7 12h10',
  },
  {
    title: 'Hladká pokožka',
    desc: 'Stimuluje tvorbu kolagenu a elastinu, vyhlazuje strie i celulitidu.',
    iconPath: 'M3 7c4-3 14-3 18 0M3 12c4-3 14-3 18 0M3 17c4-3 14-3 18 0',
  },
  {
    title: 'Lokální metabolismus',
    desc: 'Zrychluje prokrvení a spalování v ošetřovaných partiích — efekt drží mezi sezeními.',
    iconPath: 'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z',
  },
  {
    title: 'Beze stopy',
    desc: 'Pouze tělu blízké materiály — žádná chemie, žádné jehly, žádná rekonvalescence.',
    iconPath: 'M12 2C8 7 6 11 6 14a6 6 0 0012 0c0-3-2-7-6-12z',
  },
  {
    title: 'Tělo & klid',
    desc: 'Hluboká relaxace, snížení napětí a pocit lehkosti, který si odnášíte domů.',
    iconPath: 'M12 3a4 4 0 100 8 4 4 0 000-8zm0 10c-4 0-8 2-8 6h16c0-4-4-6-8-6z',
  },
]

export default function About() {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-28 lg:py-40 bg-cream overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <p className="reveal section-tag mb-6">01 — Studio</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          {/* Image */}
          <div className="reveal lg:col-span-5 order-2 lg:order-1 lg:sticky lg:top-28">
            <div
              className="rounded-[2rem] overflow-hidden shadow-soft"
              style={{
                aspectRatio: '3/4',
                background:
                  'linear-gradient(160deg, #F2D9D2 0%, #E8C5BD 45%, #D4A5A0 80%, #C9A87C 100%)',
              }}
            >
              <div className="w-full h-full flex flex-col items-start justify-end p-8">
                <div className="bg-cream/85 backdrop-blur-md rounded-2xl px-5 py-4 w-full max-w-[280px] border border-cream/60">
                  <p className="font-body text-[10px] text-muted uppercase tracking-widestest mb-1">
                    Technika
                  </p>
                  <p className="font-display italic text-mocha text-2xl leading-tight">
                    Maderoterapia colombiana
                  </p>
                  <p className="font-body text-xs text-muted mt-1.5">
                    Kolumbijská dřevěná masáž
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2
              className="reveal headline text-mocha mb-8"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
            >
              Krása, která <em>se nespěchá</em>.
            </h2>

            <p className="reveal font-body text-mocha/75 text-lg leading-relaxed font-light mb-6 max-w-2xl">
              Maderoterapie je přírodní kolumbijská technika, při které se ke stimulaci
              tkání používají speciálně tvarované dřevěné nástroje. Působí mechanicky —
              rozrušuje tukové uzlíky, aktivuje lymfu a probouzí kolagenová vlákna.
            </p>

            <p className="reveal font-body text-mocha/75 text-lg leading-relaxed font-light mb-10 max-w-2xl">
              Na rozdíl od chirurgických zákroků nepotřebuje rekonvalescenci, není
              bolestivá a první výsledky jsou patrné už po jedné hodině. V mém studiu
              ji doplňuji o lymfomodeling, VacuumFit zábaly a péči o pleť — vždy
              v privátním prostředí, jen pro vás.
            </p>

            <a href="#services" className="reveal link-underline">
              Prohlédnout celý ceník
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
          </div>
        </div>

        {/* Benefits */}
        <div className="reveal mb-12">
          <p className="section-tag mb-4">02 — Co vám studio přinese</p>
          <h3
            className="headline text-mocha max-w-2xl"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Šest důvodů, proč ženy v Boskovicích volí <em>MaderoTýnku</em>.
          </h3>
        </div>

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-blush/25 rounded-2xl overflow-hidden">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-cream p-8 lg:p-10 transition-colors duration-500 hover:bg-sand"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blush-deep mb-6"
                aria-hidden
              >
                <path d={b.iconPath} />
              </svg>
              <h4 className="font-display italic text-mocha text-2xl leading-tight mb-3">
                {b.title}
              </h4>
              <p className="font-body text-sm text-mocha/70 leading-relaxed font-light">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
