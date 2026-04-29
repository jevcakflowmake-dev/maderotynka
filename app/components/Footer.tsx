'use client'

const navLinks = [
  { label: 'Studio', href: '#about' },
  { label: 'Procedury', href: '#services' },
  { label: 'Balíčky', href: '#packages' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Recenze', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' },
]

const legalLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#"
              className="flex items-center gap-3 mb-5 group"
              aria-label="MaderoTýnka"
            >
              <span
                className="relative w-7 h-7 flex items-center justify-center"
                aria-hidden
              >
                <span className="absolute inset-0 rounded-full border border-foreground/40" />
                <span className="absolute inset-1.5 rounded-full border border-foreground/70" />
                <span className="absolute inset-[12px] rounded-full bg-foreground" />
              </span>
              <span className="font-sans text-foreground text-base tracking-tight font-semibold">
                Madero<span className="italic-accent font-normal">Týnka</span>
              </span>
            </a>
            <p className="text-foreground/55 text-sm leading-relaxed max-w-sm">
              Privátní studio maderoterapie a beauty péče v Boskovicích.
              Jemná cesta k vaší přirozené kráse.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-widestest text-foreground/50 mb-4">
              Web
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/65 hover:text-foreground transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-widestest text-foreground/50 mb-4">
              Studio
            </p>
            <ul className="space-y-2.5 text-sm text-foreground/65">
              <li>
                <a
                  href="https://maps.google.com/?q=Boskovice+Nádražní+286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  Nádražní 286/8, Boskovice
                </a>
              </li>
              <li>
                <a
                  href="tel:+420733290621"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  +420 733 290 621
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/_maderotynka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  @_maderotynka
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-foreground/40 tracking-wide">
            © 2026 MaderoTýnka. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
