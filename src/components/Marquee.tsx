import { cn } from '@/lib/utils'

type MarqueeProps = {
  items: string[]
  className?: string
}

export function Marquee({ items, className }: MarqueeProps) {
  const isImage = (s: string) => /^\/.+\.(svg|png|jpe?g|webp)$/i.test(s)

  return (
    <div className={cn('overflow-hidden w-full', className)}>
  <div className="mx-auto flex items-center gap-16 animate-marquee whitespace-nowrap py-4">
    {items.map((item, index) => (
      <div
        key={`${item}-${index}`}
        className="flex min-w-[180px] md:min-w-[220px] lg:min-w-[260px] items-center justify-center"
      >
        {typeof item === 'string' && isImage(item) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item}
            alt={`brand-${index}`}
            className="
              h-16 md:h-20 lg:h-24
              w-auto max-w-full
              object-contain
              opacity-90
              transition-all duration-300
              hover:scale-110 hover:opacity-100
            "
          />
        ) : (
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-white/60">
            {item}
          </span>
        )}
      </div>
    ))}
  </div>
</div>
  )
}
