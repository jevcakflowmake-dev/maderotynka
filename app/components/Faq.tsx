'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

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

  return (
    <section
      id="faq"
      className="py-28 lg:py-40 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p
          {...fadeUp(0)}
          className="text-[11px] uppercase tracking-widestest text-foreground/60 mb-8"
        >
          06 — Otázky
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <motion.div
            {...fadeUp(0.1)}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <h2
              className="text-foreground tracking-tight leading-[0.95] mb-8"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 500 }}
            >
              Otázky <span className="italic-accent">před</span>
              <br />
              první <span className="italic-accent">návštěvou</span>.
            </h2>
            <p className="text-foreground/60 text-base leading-relaxed max-w-md mb-10">
              Pokud tu nenajdete odpověď, neváhejte mi napsat na Instagram —
              ráda zodpovím cokoli osobně.
            </p>
            <a
              href="https://instagram.com/_maderotynka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors duration-300"
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
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-7"
          >
            <ul className="border-t border-border">
              {faqs.map((f, i) => {
                const isOpen = open === i
                return (
                  <li key={i} className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full text-left flex items-start justify-between gap-6 py-6 group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`italic-accent leading-tight transition-colors duration-300 ${
                          isOpen
                            ? 'text-foreground'
                            : 'text-foreground/70 group-hover:text-foreground'
                        }`}
                        style={{ fontSize: 'clamp(1.2rem, 1.6vw, 1.6rem)' }}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-500 ${
                          isOpen
                            ? 'bg-foreground border-foreground rotate-45'
                            : 'bg-transparent border-border group-hover:border-foreground/60'
                        }`}
                        aria-hidden
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 12 12"
                          fill="none"
                          className={isOpen ? 'text-background' : 'text-foreground'}
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
                        <p className="text-foreground/70 leading-relaxed max-w-xl">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
