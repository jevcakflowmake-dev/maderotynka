'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const btn = ctaRef.current
    if (!btn) return

    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy)
      if (dist > 220) {
        btn.style.transform = 'translate(0,0)'
        return
      }
      const dx = (e.clientX - cx) * 0.16
      const dy = (e.clientY - cy) * 0.16
      btn.style.transform = `translate(${dx}px, ${dy}px)`
    }

    const onLeave = () => {
      btn.style.transform = 'translate(0,0)'
    }

    window.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      btn.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Soft glow background */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Decorative serif word */}
      <div
        className="absolute -right-[6%] top-[18%] select-none pointer-events-none font-display italic text-blush-soft/55 leading-none"
        style={{ fontSize: 'clamp(14rem, 32vw, 32rem)', letterSpacing: '-0.04em' }}
        aria-hidden
      >
        beauté
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        {/* Left: text */}
        <div className="lg:col-span-7">
          <p className="anim-sub section-tag mb-8">Privátní studio · Boskovice</p>

          <h1
            className="anim-h1 headline text-mocha mb-8"
            style={{
              fontSize: 'clamp(3.4rem, 8.5vw, 8rem)',
              lineHeight: '0.95',
            }}
          >
            Jemná cesta
            <br />
            ke <em>kráse</em>,
            <br />
            kterou v sobě <em>nosíte</em>.
          </h1>

          <p className="anim-sub font-body text-mocha/75 text-lg leading-relaxed font-light max-w-lg mb-10">
            Maderoterapie, lymfomodeling a péče o pleť — kolumbijská technika
            v privátním studiu na Nádražní v Boskovicích. Bez chemie, bez bolesti,
            s viditelným výsledkem od první návštěvy.
          </p>

          <div className="anim-cta flex flex-wrap items-center gap-4">
            <a
              ref={ctaRef}
              href="#contact"
              style={{ transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1), background-color 0.4s ease, color 0.4s ease' }}
              className="btn-primary"
            >
              Rezervovat termín
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="btn-ghost">
              Zobrazit ceník
            </a>
          </div>

          {/* Stats row */}
          <div className="anim-sub mt-16 pt-10 border-t border-mocha/10 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { num: '6+', label: 'typů procedur' },
              { num: '100%', label: 'přírodní technika' },
              { num: '5.0', label: 'hodnocení klientek' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-mocha text-3xl lg:text-4xl leading-none mb-2">
                  {s.num}
                </p>
                <p className="font-body text-[11px] text-muted uppercase tracking-widestest leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image with floating badges */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div
            className="anim-hero-img relative rounded-[2rem] overflow-hidden shadow-soft"
            style={{ aspectRatio: '4/5' }}
          >
            <div
              className="w-full h-full flex items-end justify-center relative"
              style={{
                background:
                  'linear-gradient(155deg, #F2D9D2 0%, #E8C5BD 40%, #D4A5A0 75%, #C9A87C 100%)',
              }}
            >
              {/* Decorative inner frame */}
              <div
                className="absolute inset-5 rounded-[1.5rem] border border-cream/40 pointer-events-none"
                aria-hidden
              />
              <div className="mb-10 text-center px-8 relative z-10">
                <p className="font-display italic text-cream text-3xl mb-2 drop-shadow-sm">
                  Fotografie studia
                </p>
                <p className="font-body text-cream/80 text-xs uppercase tracking-widestest">
                  připraveno pro tvé snímky
                </p>
              </div>
            </div>
          </div>

          {/* Floating badge 1 — left */}
          <div className="anim-float absolute -left-10 top-[22%] bg-cream rounded-2xl px-5 py-4 shadow-soft border border-blush/30 max-w-[180px]">
            <p className="font-body text-[10px] text-muted uppercase tracking-widestest mb-1">
              Výsledek
            </p>
            <p className="font-display text-mocha text-2xl leading-tight">1–3 cm</p>
            <p className="font-body text-xs text-muted mt-1">od první procedury</p>
          </div>

          {/* Floating badge 2 — right */}
          <div
            className="anim-float absolute -right-6 bottom-[18%] bg-mocha rounded-2xl px-5 py-4 shadow-soft max-w-[200px]"
            style={{ animationDelay: '1.5s' }}
          >
            <p className="font-body text-[10px] text-blush-deep uppercase tracking-widestest mb-1">
              Nejoblíbenější
            </p>
            <p className="font-display italic text-cream text-xl leading-tight">
              Premium balíček
            </p>
            <p className="font-body text-xs text-cream/70 mt-1">od 2 000 Kč</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hidden md:flex">
        <span className="font-body text-[10px] text-muted tracking-widestest uppercase">
          Posuňte níže
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-mocha/40 to-transparent" />
      </div>
    </section>
  )
}
