'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster=""
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Cream vignette + bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(250,246,240,0.25) 0%, rgba(250,246,240,0.65) 60%, rgba(250,246,240,0.95) 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pt-32 pb-20 text-center">
        <motion.p
          {...fadeUp(0)}
          className="text-[11px] uppercase tracking-widestest text-foreground/60 mb-8"
        >
          Privátní studio · Boskovice
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-foreground leading-[0.95] mb-8 tracking-tight"
          style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)', fontWeight: 500 }}
        >
          Probuďte <span className="italic-accent text-blush-deep">krásu</span>,
          <br />
          kterou v sobě <span className="italic-accent text-blush-deep">nosíte</span>.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="font-sans text-hero-subtitle/85 text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          Maderoterapie, lymfomodeling a péče o pleť — kolumbijská technika
          v privátním studiu na Nádražní v Boskovicích. Bez chemie, bez bolesti,
          s viditelným výsledkem od první návštěvy.
        </motion.p>

        {/* Email form */}
        <motion.form
          {...fadeUp(0.3)}
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = 'https://instagram.com/_maderotynka'
          }}
          className="liquid-glass rounded-full p-1.5 flex items-center gap-2 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Váš e-mail nebo Instagram"
            className="flex-1 bg-transparent px-5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors duration-300 whitespace-nowrap"
          >
            Rezervovat
          </button>
        </motion.form>

        {/* Avatars + social proof */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <div className="flex -space-x-2">
            {['T', 'B', 'J'].map((initial) => (
              <div
                key={initial}
                className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium text-foreground/80"
              >
                {initial}
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/60">
            <span className="text-foreground">120+</span> spokojených klientek
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50 z-10">
        <span className="text-[10px] tracking-widestest uppercase text-foreground/60">
          Posuňte níže
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  )
}
