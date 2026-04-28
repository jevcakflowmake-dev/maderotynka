'use client'

const items = [
  'Maderoterapie těla',
  'Lymfomodeling',
  'VacuumFit zábal',
  'Neinvazivní liposukce',
  'Maderoterapie pleti',
  'Bahenní zábal',
  'Kavitace',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <section className="bg-[#2C1F0E] py-5 overflow-hidden relative">
      {/* Fade left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #2C1F0E, transparent)' }}
      />
      {/* Fade right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #2C1F0E, transparent)' }}
      />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-5 pr-5 whitespace-nowrap">
            <span className="font-body text-[#F7F0E8] text-sm tracking-widest uppercase opacity-80">
              {item}
            </span>
            <span className="text-[#B07D55] text-base" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
