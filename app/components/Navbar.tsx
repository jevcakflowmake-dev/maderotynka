'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'O proceduře', href: '#about' },
  { label: 'Ceník', href: '#services' },
  { label: 'Balíčky', href: '#packages' },
  { label: 'Recenze', href: '#reviews' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`anim-nav fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F7F0E8]/90 backdrop-blur-md shadow-[0_1px_24px_rgba(44,31,14,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#B07D55] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <span className="font-display font-bold text-[#F7F0E8] text-sm tracking-tight">MT</span>
          </div>
          <span className="font-display text-[#2C1F0E] text-lg font-semibold tracking-tight hidden sm:block">
            MaderoTýnka
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link font-body text-sm text-[#2C1F0E] tracking-wide opacity-80 hover:opacity-100 transition-opacity"
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
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2C1F0E] text-[#F7F0E8] font-body text-sm font-medium hover:bg-[#B07D55] transition-colors duration-300"
          >
            Rezervovat termín
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Otevřít menu"
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          >
            <span
              className={`block h-px w-5 bg-[#2C1F0E] transition-all duration-300 ${
                open ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-[#2C1F0E] transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-[#2C1F0E] transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#F7F0E8]/95 backdrop-blur-md border-t border-[#EDE2D4]`}
      >
        <ul className="px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-base text-[#2C1F0E] opacity-80 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#2C1F0E] text-[#F7F0E8] font-body text-sm font-medium"
            >
              Rezervovat termín
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
