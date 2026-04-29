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
    <section className="bg-background py-10 overflow-hidden relative border-y border-border/40">
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, hsl(var(--background)), transparent)',
        }}
        aria-hidden
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to left, hsl(var(--background)), transparent)',
        }}
        aria-hidden
      />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 pr-10 whitespace-nowrap">
            <span className="italic-accent text-foreground text-3xl lg:text-4xl">
              {item}
            </span>
            <span className="text-foreground/30 text-base leading-none" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
