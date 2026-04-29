'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp } from '@/lib/animations'

const MISSION_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4'

const missionText =
  'Maderoterapie je kolumbijská technika, při které se ke stimulaci tkání používají speciálně tvarované dřevěné nástroje. Působí mechanicky — rozrušuje tukové uzlíky, aktivuje lymfu a probouzí kolagenová vlákna. Bez chemie, bez bolesti, s viditelným výsledkem od první návštěvy.'

function WordReveal({
  text,
  scrollYProgress,
  startOffset,
  endOffset,
}: {
  text: string
  scrollYProgress: MotionValue<number>
  startOffset: number
  endOffset: number
}) {
  const words = text.split(' ')
  const N = words.length
  const range = endOffset - startOffset

  return (
    <span className="inline">
      {words.map((word, i) => {
        const wordStart = startOffset + (i / N) * range
        const wordEnd = startOffset + ((i + 1) / N) * range
        return (
          <Word key={i} scrollYProgress={scrollYProgress} start={wordStart} end={wordEnd}>
            {word}
          </Word>
        )
      })}
    </span>
  )
}

function Word({
  children,
  scrollYProgress,
  start,
  end,
}: {
  children: string
  scrollYProgress: MotionValue<number>
  start: number
  end: number
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  })

  return (
    <section
      id="about"
      className="relative py-32 lg:py-44 bg-background overflow-hidden"
    >
      {/* Faint video bg */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={MISSION_VIDEO} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, hsl(var(--background)) 0%, rgba(0,0,0,0.85) 50%, hsl(var(--background)) 100%)',
        }}
        aria-hidden
      />

      <div ref={ref} className="relative max-w-5xl mx-auto px-6 lg:px-10 z-10">
        <motion.p
          {...fadeUp(0)}
          className="text-[11px] uppercase tracking-widestest text-foreground/60 mb-8"
        >
          01 — Naše mise
        </motion.p>

        <h2
          className="text-foreground tracking-tight leading-[1.1]"
          style={{ fontSize: 'clamp(1.8rem, 3.8vw, 3.4rem)', fontWeight: 400 }}
        >
          <WordReveal
            text={missionText}
            scrollYProgress={scrollYProgress}
            startOffset={0}
            endOffset={1}
          />
        </h2>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-12 text-foreground/60 text-sm tracking-widestest uppercase"
        >
          ✦ Privátní studio · Boskovice
        </motion.p>
      </div>
    </section>
  )
}
