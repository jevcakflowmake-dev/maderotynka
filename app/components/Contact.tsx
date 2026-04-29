'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Hls from 'hls.js'
import { fadeUp } from '@/lib/animations'

const CTA_HLS =
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

export default function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | null = null

    if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(CTA_HLS)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = CTA_HLS
    }

    return () => {
      if (hls) hls.destroy()
    }
  }, [])

  return (
    <section
      id="contact"
      className="py-28 lg:py-40 bg-background overflow-hidden relative"
    >
      {/* HLS video bg */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 70%, hsl(var(--background)) 100%)',
        }}
        aria-hidden
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10 text-center">
        <motion.p
          {...fadeUp(0)}
          className="text-[11px] uppercase tracking-widestest text-foreground/60 mb-8"
        >
          07 — Začněte teď
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="text-foreground tracking-tight leading-[0.95] mb-8"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)', fontWeight: 500 }}
        >
          Pojďme <span className="italic-accent">začít</span>.
          <br />
          Vaše tělo si <span className="italic-accent">o to říká</span>.
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="text-foreground/65 text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          Nejjednodušší způsob objednání je přes Instagram. Napište mi přibližný
          čas a typ procedury — vrátím se vám obvykle do několika hodin.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <a
            href="https://instagram.com/_maderotynka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors duration-300"
          >
            Rezervovat termín
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
          <a
            href="tel:+420733290621"
            className="liquid-glass inline-flex items-center gap-2 px-7 py-3 rounded-full text-foreground text-sm tracking-wide hover:text-foreground/80 transition-colors duration-300"
          >
            Zavolat — 733 290 621
          </a>
        </motion.div>

        {/* Contact grid */}
        <motion.div
          {...fadeUp(0.4)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden max-w-3xl mx-auto"
        >
          {[
            {
              label: 'Instagram',
              value: '@_maderotynka',
              href: 'https://instagram.com/_maderotynka',
            },
            {
              label: 'Adresa',
              value: 'Nádražní 286/8, Boskovice',
              href: 'https://maps.google.com/?q=Boskovice+Nádražní+286',
            },
            {
              label: 'Termíny',
              value: 'Po dohodě · Po–Pá',
              href: null,
            },
          ].map((c) => {
            const Inner = (
              <div className="bg-background p-7 h-full text-left transition-colors duration-500 hover:bg-secondary">
                <p className="text-[10px] uppercase tracking-widestest text-foreground/50 mb-2">
                  {c.label}
                </p>
                <p className="italic-accent text-foreground text-lg lg:text-xl leading-tight">
                  {c.value}
                </p>
              </div>
            )
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {Inner}
              </a>
            ) : (
              <div key={c.label}>{Inner}</div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
