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

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.87 19.79 19.79 0 010.9 1.22 2 2 0 012.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.68a16 16 0 006.29 6.29l1.05-1.05a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92z" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 md:px-12 lg:px-28 py-4 flex items-center justify-between transition-colors duration-500 ${
        scrolled ? 'bg-background/40 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 group" aria-label="MaderoTýnka">
        <span className="relative w-7 h-7 flex items-center justify-center" aria-hidden>
          <span className="absolute inset-0 rounded-full border border-foreground/40" />
          <span className="absolute inset-1.5 rounded-full border border-foreground/70" />
          <span className="absolute inset-[12px] rounded-full bg-foreground" />
        </span>
        <span className="font-sans text-foreground text-base tracking-tight font-semibold">
          Madero<span className="italic-accent font-normal text-blush-deep">Týnka</span>
        </span>
      </a>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center text-sm text-foreground/80">
        {links.map((l, i) => (
          <li key={l.href} className="flex items-center">
            <a
              href={l.href}
              className="px-3 py-1.5 hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
            {i < links.length - 1 && (
              <span className="text-foreground/30 select-none" aria-hidden>
                •
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Right cluster */}
      <div className="flex items-center gap-2">
        <a
          href="https://instagram.com/_maderotynka"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors duration-300"
        >
          <InstagramIcon size={15} />
        </a>
        <a
          href="tel:+420733290621"
          aria-label="Telefon"
          className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors duration-300 hidden sm:flex"
        >
          <PhoneIcon size={15} />
        </a>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 ml-2 px-5 py-2 rounded-full bg-foreground text-background text-[13px] tracking-wide hover:bg-foreground/90 transition-colors duration-300"
        >
          Rezervovat
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Otevřít menu"
          className="lg:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center ml-1"
        >
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-500 ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-500 ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        } bg-background/90 backdrop-blur-xl border-t border-border/50`}
      >
        <ul className="px-6 py-8 flex flex-col gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="italic-accent text-2xl text-foreground hover:text-foreground/70 transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm"
            >
              Rezervovat termín
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
