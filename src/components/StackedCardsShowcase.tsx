import { useEffect, useRef, type SyntheticEvent } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { AnimatedButton } from '@/components/AnimatedButton'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export type StackedCardItem = {
  id?: string
  title: string
  image: string
}

type StackedCardsShowcaseProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  items: StackedCardItem[]
  theme?: 'dark' | 'darker'
  ctaLabel?: string
  fallbackSrc?: string
  onImageError?: (e: SyntheticEvent<HTMLImageElement>) => void
}

export function StackedCardsShowcase({
  id,
  eyebrow,
  title,
  description,
  items,
  theme = 'dark',
  ctaLabel,
  fallbackSrc,
  onImageError,
}: StackedCardsShowcaseProps) {
  const containerRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stacked-card')
      if (!cards.length) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: `+=${cards.length * 100}%`,
          scrub: 1, // smooth dragging effect
          pin: true,
          anticipatePin: 1,
        },
      })

      cards.forEach((card, i) => {
        if (i !== 0) {
          gsap.set(card, {
            y: 120,
            autoAlpha: 0,
            filter: 'blur(12px)',
            scale: 0.96,
          })
        }
      })

      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, {
            y: 0,
            autoAlpha: 1,
            filter: 'blur(0px)',
            scale: 1,
          })
          return
        }

        tl.to(cards[i - 1], {
          y: -40,
          autoAlpha: 0,
          filter: 'blur(8px)',
          scale: 0.94,
          duration: 0.8,
          ease: 'power3.inOut',
        }, `step-${i}`)

        tl.to(card, {
          y: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
          scale: 1,
          duration: 1.2,
          ease: 'power3.inOut',
        }, `step-${i}`)
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id={id} className={cn("relative overflow-hidden border-y border-white/5 bg-[var(--bg-primary)]")}>
      {theme === 'darker' && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[url('/images/arrow-pattern.svg')] bg-[length:240px_160px] bg-repeat opacity-15" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#f4f7fb] to-[#eaf0f6]" />
        </>
      )}
      <div ref={wrapperRef} className="flex h-[100dvh] w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 2xl:max-w-[1400px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative z-20 space-y-6">
              {eyebrow && (
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-accent/70">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {eyebrow}
                </div>
              )}
              <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-[0_10px_24px_rgba(2,6,23,0.7)] sm:text-5xl">
                {title}
              </h2>
              {description && (
                <p className="max-w-md leading-relaxed text-white/95 sm:text-lg">
                  {description}
                </p>
              )}
              {ctaLabel && (
                <AnimatedButton variant="outline" className="mt-4">
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </AnimatedButton>
              )}
            </div>
            
            <div className="relative h-[360px] w-full perspective-[1200px] sm:h-[460px] lg:h-[540px]">
              {items.map((item) => (
                <div key={item.title} className="stacked-card absolute inset-0 origin-top transform-gpu will-change-transform">
                  <div className="group relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--bg-card)] shadow-[0_25px_60px_rgba(5,20,40,0.12)] backdrop-blur-xl">
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-70" />
                    
                    <div className="relative h-[70%] overflow-hidden border-b border-white/10 p-4 sm:h-[75%]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        loading="lazy"
                        data-fallback={fallbackSrc}
                        onError={onImageError}
                      />
                    </div>
                    <div className="flex h-[30%] items-center px-6 pb-2 pt-2 sm:h-[25%] sm:px-8">
                      {item.id && (
                        <span className="mr-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-accent/10 text-sm font-semibold text-accent">
                          {item.id}
                        </span>
                      )}
                      <h3 className="line-clamp-2 text-xl font-semibold text-white sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
