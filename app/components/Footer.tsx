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

export default function Footer() {
  return (
    <footer className="bg-mocha border-t border-cream/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#"
              className="font-display italic text-cream text-3xl tracking-tight inline-block mb-5"
            >
              Madero<span className="text-blush">Týnka</span>
            </a>
            <p className="font-body text-cream/60 text-sm leading-relaxed font-light max-w-sm">
              Privátní studio maderoterapie a beauty péče v Boskovicích.
              Jemná cesta k vaší přirozené kráse.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="font-body text-[10px] uppercase tracking-widestest text-blush mb-4">
              Web
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-cream/70 hover:text-cream transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="font-body text-[10px] uppercase tracking-widestest text-blush mb-4">
              Studio
            </p>
            <ul className="space-y-2.5 font-body text-sm text-cream/70">
              <li>
                <a
                  href="https://maps.google.com/?q=Boskovice+Nádražní+286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors duration-300"
                >
                  Nádražní 286/8, Boskovice
                </a>
              </li>
              <li>
                <a
                  href="tel:+420733290621"
                  className="hover:text-cream transition-colors duration-300"
                >
                  +420 733 290 621
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/_maderotynka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors duration-300"
                >
                  @_maderotynka
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/50 tracking-wide">
            © {new Date().getFullYear()} MaderoTýnka — všechna práva vyhrazena
          </p>
          <p className="font-body text-xs text-cream/50 italic">
            Vyrobeno s láskou v Boskovicích.
          </p>
        </div>
      </div>
    </footer>
  )
}
