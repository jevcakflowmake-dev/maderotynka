'use client'

import { useEffect, useRef, useState } from 'react'

const faqs = [
  {
    q: 'Bolí maderoterapie?',
    a: 'Procedura je intenzivní masáž, kterou klientky popisují jako příjemně silnou, nikoliv bolestivou. Tlak vždy přizpůsobím vaší citlivosti. Druhý den můžete cítit lehkou ztuhlost — to je znamení, že tkáň pracuje.',
  },
  {
    q: 'Kolik procedur potřebuji k viditelnému výsledku?',
    a: 'První zúžení obvodu (1–3 cm) cítíte hned po prvním sezení. Pro trvalé tvarování postavy doporučuji sérii 5–10 procedur s odstupem 5–7 dní. K udržení pak stačí jedna procedura měsíčně.',
  },
  {
    q: 'Pro koho maderoterapie není vhodná?',
    a: 'Není doporučená v těhotenství, při akutních zánětech, varixech velkého stupně, čerstvých operacích nebo onkologických onemocněních. Vždy si promluvíme před první návštěvou — ráda vás provedu kontraindikacemi.',
  },
  {
    q: 'Jak se na proceduru připravit?',
    a: 'Hodinu před návštěvou vypijte sklenici vody, lehce se najezte a vyhněte se kávě a alkoholu. Po proceduře pijte zvýšené množství vody — pomáhá tělu odplavit toxiny.',
  },
  {
    q: 'Mohu kombinovat více procedur v jeden den?',
    a: 'Ano, naopak — kombinace jako madero + VacuumFit nebo madero + lymfomodeling dávají rychlejší výsledek. Pro to nabízím zvýhodněné balíčky.',
  },
  {
    q: 'Jak se objednat?',
    a: 'Nejjednodušeji přes Instagram @_maderotynka nebo telefonicky. Termín obvykle najdeme do jednoho týdne. První konzultace je zdarma a nezávazná.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)
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
    <section
      id="faq"
      ref={sectionRef}
      className="py-28 lg:py-40 bg-sand overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="reveal section-tag mb-6">07 — Na co se ptáte</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <div className="reveal lg:col-span-5 lg:sticky lg:top-28">
            <h2
              className="headline text-mocha mb-8"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
            >
              Otázky <em>před první návštěvou</em>.
            </h2>
            <p className="font-body text-mocha/70 text-base leading-relaxed font-light max-w-md mb-10">
              Pokud tu nenajdete odpověď, neváhejte mi napsat na Instagram —
              ráda zodpovím cokoli osobně.
            </p>
            <a
              href="https://instagram.com/_maderotynka"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Napsat na Instagram
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

          <div className="reveal lg:col-span-7">
            <ul className="border-t border-mocha/15">
              {faqs.map((f, i) => {
                const isOpen = open === i
                return (
                  <li key={i} className="border-b border-mocha/15">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full text-left flex items-start justify-between gap-6 py-6 group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-display italic leading-tight transition-colors duration-300 ${
                          isOpen ? 'text-blush-deep' : 'text-mocha group-hover:text-blush-deep'
                        }`}
                        style={{ fontSize: 'clamp(1.2rem, 1.6vw, 1.6rem)' }}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`shrink-0 w-7 h-7 rounded-full border border-mocha/20 flex items-center justify-center transition-all duration-500 ${
                          isOpen
                            ? 'bg-mocha border-mocha rotate-45'
                            : 'bg-transparent group-hover:border-blush-deep'
                        }`}
                        aria-hidden
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 12 12"
                          fill="none"
                          className={isOpen ? 'text-cream' : 'text-mocha'}
                        >
                          <path
                            d="M6 1v10M1 6h10"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100 pb-7'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-body text-mocha/75 leading-relaxed font-light max-w-xl">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
