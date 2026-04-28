'use client'

import { useEffect, useRef } from 'react'

const contacts = [
  {
    label: 'Instagram',
    value: '@_maderotynka',
    href: 'https://instagram.com/_maderotynka',
    iconPath: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'Telefon',
    value: '+420 733 290 621',
    href: 'tel:+420733290621',
    iconPath: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.87 19.79 19.79 0 010.9 1.22 2 2 0 012.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.68a16 16 0 006.29 6.29l1.05-1.05a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92z" />
    ),
  },
  {
    label: 'Adresa',
    value: 'Boskovice, Nádražní 286/8',
    href: 'https://maps.google.com/?q=Boskovice+Nádražní+286',
    iconPath: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: 'Termíny',
    value: 'Po dohodě · Po–Pá',
    href: null,
    iconPath: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
]

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-28 lg:py-40 bg-mocha overflow-hidden relative"
    >
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(232, 197, 189, 0.18) 0%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(201, 168, 124, 0.18) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <p className="reveal section-tag mb-6 text-blush">08 — Kontakt</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — info */}
          <div className="lg:col-span-7">
            <h2
              className="reveal headline text-cream mb-10"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
            >
              Pojďme začít.
              <br />
              <em className="text-blush">Vaše tělo si o to říká.</em>
            </h2>

            <p className="reveal font-body text-cream/70 text-lg leading-relaxed font-light max-w-xl mb-12">
              Nejjednodušší způsob objednání je přes Instagram. Napište mi přibližný
              čas a typ procedury, který chcete vyzkoušet — vrátím se vám obvykle
              do několika hodin.
            </p>

            <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream/10 rounded-2xl overflow-hidden mb-10">
              {contacts.map((c) => {
                const Inner = (
                  <div className="bg-mocha p-7 lg:p-8 transition-colors duration-500 hover:bg-mocha-soft h-full flex flex-col justify-between">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blush mb-6"
                      aria-hidden
                    >
                      {c.iconPath}
                    </svg>
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-widestest text-blush/80 mb-2">
                        {c.label}
                      </p>
                      <p className="font-display italic text-cream text-xl lg:text-2xl leading-tight">
                        {c.value}
                      </p>
                    </div>
                  </div>
                )

                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                )
              })}
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="lg:col-span-5">
            <div className="reveal sticky top-28 rounded-[2rem] overflow-hidden bg-blush-soft text-mocha p-8 lg:p-10 shadow-soft-blush">
              <p className="font-body text-[10px] uppercase tracking-widestest text-mocha/60 mb-5">
                Rezervace na jeden dotyk
              </p>
              <h3
                className="font-display italic leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)' }}
              >
                Objednejte se přes Instagram.
              </h3>
              <p className="font-body text-mocha/75 leading-relaxed font-light mb-8">
                Otevřu vám DM zprávu rovnou s předvyplněným textem — stačí jen
                doplnit termín, který vám vyhovuje.
              </p>

              <a
                href="https://instagram.com/_maderotynka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-mocha text-cream font-body text-sm tracking-wide hover:bg-mocha-soft transition-colors duration-500 mb-8"
              >
                <svg
                  width="18"
                  height="18"
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
                Napsat na @_maderotynka
              </a>

              <div className="pt-6 border-t border-mocha/15 space-y-3">
                <p className="font-body text-xs text-mocha/60 uppercase tracking-widestest">
                  Nebo telefonicky
                </p>
                <a
                  href="tel:+420733290621"
                  className="block font-display italic text-2xl text-mocha hover:text-blush-deep transition-colors duration-300"
                >
                  +420 733 290 621
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
