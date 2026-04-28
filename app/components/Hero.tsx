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
      const dx = (e.clientX - cx) * 0.18
      const dy = (e.clientY - cy) * 0.18
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F0E8]">
      {/* Hero glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Decorative background "MT" */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none font-display font-bold text-[#EDE2D4] leading-none"
        style={{ fontSize: 'clamp(12rem, 30vw, 26rem)', letterSpacing: '-0.05em', opacity: 0.6 }}
        aria-hidden
      >
        MT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: text */}
        <div>
          {/* Section number */}
          <p className="anim-sub font-body text-xs text-[#9E8A79] tracking-[0.2em] uppercase mb-6">
            00 / Hero — Boskovice
          </p>

          <h1
            className="anim-h1 font-display text-[#2C1F0E] mb-6"
            style={{
              fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: '0.95',
            }}
          >
            Přírodní
            <br />
            <em className="not-italic text-[#B07D55]">Mádero</em>
            <br />
            terapie
          </h1>

          <p className="anim-sub font-body text-[#2C1F0E] text-lg leading-relaxed opacity-70 max-w-md mb-10">
            Tvarujte postavu, odbourejte celulitidu a vraťte pleti záři — přírodními
            dřevěnými nástroji a ověřenými technikami.
          </p>

          {/* Stats row */}
          <div className="anim-sub flex gap-8 mb-10">
            {[
              { num: '4+', label: 'typy procedur' },
              { num: '100%', label: 'přírodní' },
              { num: '⭐⭐⭐⭐⭐', label: 'hodnocení' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-[#B07D55] text-2xl font-semibold leading-none mb-1">{s.num}</p>
                <p className="font-body text-xs text-[#9E8A79] uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="anim-cta flex flex-wrap gap-4">
            <a
              ref={ctaRef}
              href="#contact"
              style={{ transition: 'transform 0.15s ease, background-color 0.3s ease' }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2C1F0E] text-[#F7F0E8] font-body font-medium text-sm hover:bg-[#B07D55]"
            >
              Objednat se
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#2C1F0E]/20 text-[#2C1F0E] font-body font-medium text-sm hover:border-[#B07D55] hover:text-[#B07D55] transition-colors duration-300"
            >
              Ceník procedur
            </a>
          </div>
        </div>

        {/* Right: image placeholder with floating badges */}
        <div className="relative hidden lg:block">
          <div className="anim-hero-img relative rounded-3xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
            {/* Placeholder image */}
            <div
              className="w-full h-full flex items-end justify-center"
              style={{
                background: 'linear-gradient(160deg, #EDE2D4 0%, #D4BBA0 50%, #B07D55 100%)',
              }}
            >
              <div className="mb-12 text-center px-8">
                <p className="font-display text-[#F7F0E8] text-2xl italic opacity-70">Vaše fotografie</p>
                <p className="font-body text-[#F7F0E8] text-sm opacity-50 mt-2">Nahrajte obrázek procedury</p>
              </div>
            </div>
          </div>

          {/* Floating badge 1 */}
          <div className="absolute -left-8 top-1/4 bg-[#F7F0E8] rounded-2xl px-4 py-3 shadow-xl border border-[#EDE2D4]">
            <p className="font-body text-xs text-[#9E8A79] uppercase tracking-widest mb-1">Výsledek</p>
            <p className="font-display text-[#2C1F0E] text-lg font-semibold">1–3 cm</p>
            <p className="font-body text-xs text-[#9E8A79]">od první procedury</p>
          </div>

          {/* Floating badge 2 */}
          <div className="absolute -right-4 bottom-1/4 bg-[#2C1F0E] rounded-2xl px-4 py-3 shadow-xl">
            <p className="font-body text-xs text-[#B07D55] uppercase tracking-widest mb-1">Oblíbené</p>
            <p className="font-display text-[#F7F0E8] text-base font-semibold">Premium balíček</p>
            <p className="font-body text-xs text-[#9E8A79]">od 2 000 Kč</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-xs text-[#9E8A79] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-[#9E8A79]" style={{ animation: 'fadeUp 1.5s ease infinite' }} />
      </div>
    </section>
  )
}
