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
  const doubled = [...items, ...items, ...items]

  return (
    <section className="bg-sand py-7 overflow-hidden relative border-y border-blush/20">
      {/* Soft fades on edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #EFE4D6, transparent)' }}
        aria-hidden
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #EFE4D6, transparent)' }}
        aria-hidden
      />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 whitespace-nowrap">
            <span className="font-display italic text-mocha text-2xl lg:text-3xl">
              {item}
            </span>
            <span
              className="text-gold text-lg leading-none"
              aria-hidden
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
