'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Studio', href: '#about' },
  { label: 'Procedury', href: '#services' },
  { label: 'Balíčky', href: '#packages' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Recenze', href: '#reviews' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`anim-nav fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-xl border-b border-blush/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="MaderoTýnka">
          <span
            className="font-display italic text-mocha text-2xl leading-none tracking-tight transition-colors duration-500 group-hover:text-blush-deep"
          >
            Madero<span className="text-blush-deep">Týnka</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link font-body text-[13px] text-mocha/80 tracking-wide hover:text-mocha transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-mocha/20 text-mocha font-body text-[13px] tracking-wide hover:bg-mocha hover:text-cream hover:border-mocha transition-all duration-500"
          >
            Rezervovat termín
            <span className="w-1.5 h-1.5 rounded-full bg-blush-deep" aria-hidden />
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Otevřít menu"
            className="lg:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center"
          >
            <span
              className={`block h-px w-5 bg-mocha transition-all duration-500 ${
                open ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-mocha transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-mocha transition-all duration-500 ${
                open ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        } bg-cream/95 backdrop-blur-xl border-t border-blush/20`}
      >
        <ul className="px-6 py-8 flex flex-col gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display italic text-2xl text-mocha hover:text-blush-deep transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mocha text-cream font-body text-sm"
            >
              Rezervovat termín
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
