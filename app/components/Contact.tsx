'use client'

import { useEffect, useRef } from 'react'

const contacts = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    label: 'Instagram',
    value: '@_maderotynka',
    href: 'https://instagram.com/_maderotynka',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.87 19.79 19.79 0 01.9 1.22 2 2 0 012.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.68a16 16 0 006.29 6.29l1.05-1.05a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92z"/>
      </svg>
    ),
    label: 'Telefon',
    value: '+420 733 290 621',
    href: 'tel:+420733290621',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Adresa',
    value: 'Boskovice, Nádražní 286/8',
    href: 'https://maps.google.com/?q=Boskovice+Nádražní+286',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Termíny',
    value: 'Dle dohody',
    href: null,
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
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="contact" ref={sectionRef} className="py-24 lg:py-36 bg-[#2C1F0E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="reveal font-body text-xs text-[#B07D55] tracking-[0.2em] uppercase mb-4">
            05 / Kontakt
          </p>
          <h2
            className="reveal font-display text-[#F7F0E8] mb-14"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: '0.95' }}
          >
            Objednejte se
            <br />
            <em className="not-italic text-[#B07D55]">ještě dnes</em>
          </h2>

          {/* Contact cards */}
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contacts.map((c) => {
              const Inner = (
                <div className="service-card bg-[#3D2E18] rounded-2xl p-6 h-full">
                  <div className="text-[#B07D55] mb-4">{c.icon}</div>
                  <p className="font-body text-xs text-[#9E8A79] uppercase tracking-widest mb-2">{c.label}</p>
                  <p className="font-display text-[#F7F0E8] text-lg font-semibold leading-snug">{c.value}</p>
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

          {/* Big CTA */}
          <div className="reveal text-center py-14 border-t border-[#3D2E18]">
            <p className="font-body text-[#9E8A79] text-base mb-8 max-w-sm mx-auto">
              Nejsnazší způsob objednání? Napište nám přímo na Instagram.
            </p>
            <a
              href="https://instagram.com/_maderotynka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#B07D55] text-[#F7F0E8] font-body font-medium text-base hover:bg-[#C49060] transition-colors duration-300 shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Objednat se přes Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1008] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#B07D55] flex items-center justify-center">
              <span className="font-display font-bold text-[#F7F0E8] text-xs">MT</span>
            </div>
            <span className="font-display text-[#F7F0E8] text-base font-semibold">MaderoTýnka</span>
          </div>

          <p className="font-body text-xs text-[#9E8A79]">
            © {new Date().getFullYear()} MaderoTýnka — Boskovice
          </p>

          <a
            href="https://instagram.com/_maderotynka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-xs text-[#9E8A79] hover:text-[#B07D55] transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @_maderotynka
          </a>
        </div>
      </footer>
    </>
  )
}
