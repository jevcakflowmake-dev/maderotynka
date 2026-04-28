'use client'

import { useEffect, useRef, useState } from 'react'

type Service = {
  name: string
  duration?: string
  price: string
}

type Category = {
  id: string
  label: string
  services: Service[]
}

const categories: Category[] = [
  {
    id: 'madero-telo',
    label: 'Madero těla',
    services: [
      { name: 'Maderoterapie těla', duration: '50 min', price: '790 Kč' },
      { name: 'Série 5× maderoterapie', duration: '5 × 50 min', price: '3 750 Kč' },
      { name: 'Série 10× maderoterapie', duration: '10 × 50 min', price: '7 000 Kč' },
      { name: 'Madero s lymfomodelingem', duration: '80 min', price: '1 490 Kč' },
    ],
  },
  {
    id: 'madero-plet',
    label: 'Madero pleti',
    services: [
      { name: 'Maderoterapie pleti', duration: '45 min', price: '600 Kč' },
      { name: 'Série 5× maderoterapie pleti', duration: '5 × 45 min', price: '2 750 Kč' },
      { name: 'Série 10× maderoterapie pleti', duration: '10 × 45 min', price: '5 000 Kč' },
    ],
  },
  {
    id: 'lymfomodeling',
    label: 'Lymfomodeling',
    services: [
      { name: 'Lymfomodeling 1×', duration: '60–100 min dle postavy', price: '2 000 Kč' },
      { name: 'Série 3× lymfomodeling', duration: '3×', price: '5 400 Kč' },
      { name: 'Série 5× lymfomodeling', duration: '5×', price: '8 000 Kč' },
    ],
  },
  {
    id: 'vacuumfit',
    label: 'VacuumFit zábaly',
    services: [
      { name: 'VacuumFit zábal', duration: '40 min', price: '750 Kč' },
      { name: 'Série 5× VacuumFit', duration: '5 × 40 min', price: '3 600 Kč' },
      { name: 'Série 10× VacuumFit', duration: '10 × 40 min', price: '7 000 Kč' },
    ],
  },
  {
    id: 'bahenni',
    label: 'Bahenní zábal',
    services: [
      { name: 'Anticelulitidní bahenní zábal (přídavek)', duration: '30 min', price: '290 Kč' },
    ],
  },
  {
    id: 'kavitace',
    label: 'Kavitace',
    services: [
      { name: 'Neinvazivní liposukce — kavitace', price: 'Na dotaz' },
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState(categories[0].id)
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

  const current = categories.find((c) => c.id === active)!

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-36 bg-[#2C1F0E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <p className="reveal font-body text-xs text-[#B07D55] tracking-[0.2em] uppercase mb-4">
          02 / Ceník
        </p>
        <h2
          className="reveal font-display text-[#F7F0E8] mb-12"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: '0.95' }}
        >
          Procedury
          <br />
          <em className="not-italic text-[#B07D55]">& ceny</em>
        </h2>

        {/* Tab nav */}
        <div className="reveal flex flex-wrap gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                active === c.id
                  ? 'bg-[#B07D55] text-[#F7F0E8]'
                  : 'bg-[#3D2E18] text-[#9E8A79] hover:text-[#F7F0E8] hover:bg-[#4A3A22]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Service list */}
        <div className="reveal border-t border-[#3D2E18]">
          {current.services.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-5 border-b border-[#3D2E18] group hover:bg-[#3D2E18]/40 px-4 -mx-4 rounded-lg transition-colors duration-200"
            >
              <div>
                <p className="font-body text-[#F7F0E8] text-base group-hover:text-[#F7F0E8]">{s.name}</p>
                {s.duration && (
                  <p className="font-body text-xs text-[#9E8A79] mt-0.5">{s.duration}</p>
                )}
              </div>
              <span className="font-display text-[#B07D55] text-xl font-semibold whitespace-nowrap ml-6">
                {s.price}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 flex flex-wrap gap-4 items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B07D55] text-[#F7F0E8] font-body font-medium text-sm hover:bg-[#C49060] transition-colors duration-300"
          >
            Rezervovat proceduru
          </a>
          <p className="font-body text-xs text-[#9E8A79]">Objednávky přes Instagram nebo telefon</p>
        </div>
      </div>
    </section>
  )
}
