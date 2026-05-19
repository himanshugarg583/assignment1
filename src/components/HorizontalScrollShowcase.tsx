import { useEffect, useRef, type SyntheticEvent } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { AnimatedButton } from '@/components/AnimatedButton'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export type HorizontalScrollItem = {
  title: string
  image: string
}

type HorizontalScrollShowcaseProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  items: HorizontalScrollItem[]
  theme?: 'dark' | 'darker'
  ctaLabel?: string
  fallbackSrc?: string
  onImageError?: (event: SyntheticEvent<HTMLImageElement>) => void
  includeIntroInTrack?: boolean
}

export function HorizontalScrollShowcase({
  id,
  eyebrow,
  title,
  description,
  items,
  theme = 'darker',
  ctaLabel,
  fallbackSrc,
  onImageError,
  includeIntroInTrack = true,
}: HorizontalScrollShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      return
    }

    const ctx = gsap.context(() => {
      const section = sectionRef.current
      const track = trackRef.current
      const viewport = viewportRef.current
      if (!section || !track || !viewport) return

      const updateMetrics = () => {
        const firstCard = track.querySelector<HTMLElement>(
          '[data-horizontal-card]',
        )
        const cardWidth = firstCard?.offsetWidth ?? 0
        const viewportWidth =
          viewport.getBoundingClientRect().width ||
          section.getBoundingClientRect().width
        const offset = Math.max(0, (viewportWidth - cardWidth) / 2)
        track.style.paddingLeft = `${offset}px`
        track.style.paddingRight = `${offset}px`
        const trackWidth = track.scrollWidth
        return Math.max(1, trackWidth - viewportWidth)
      }

      const scrollDistance = () => updateMetrics()

      gsap.set(track, { willChange: 'transform' })

      const scrollTween = gsap.to(track, {
        x: () => -scrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefreshInit: updateMetrics,
        },
      })

      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })

      const cards = gsap.utils.toArray<HTMLElement>('[data-horizontal-card]')
      const images = gsap.utils.toArray<HTMLElement>('[data-horizontal-image]')

      gsap.set(cards, { willChange: 'transform, opacity, filter' })

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.4,
            scale: 0.94,
            filter: 'blur(6px)',
            boxShadow: '0 18px 40px rgba(5, 20, 40, 0.2)',
          },
          {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            boxShadow: '0 35px 90px rgba(16, 185, 129, 0.35)',
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: 'left center',
              end: 'right center',
              scrub: true,
            },
          },
        )
      })

      images.forEach((image) => {
        gsap.fromTo(
          image,
          { x: 30 },
          {
            x: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              containerAnimation: scrollTween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [items.length])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        'relative overflow-hidden border-y border-white/10 bg-[var(--bg-primary)]',
      )}
    >
      {theme === 'darker' && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[url('/images/arrow-pattern.svg')] bg-[length:240px_160px] bg-repeat opacity-15" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#f4f7fb] to-[#eaf0f6]" />
        </>
      )}
      <div className="relative flex h-[100dvh] w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 2xl:max-w-[1400px]">
          <div
            className={cn(
              'grid min-w-0 items-center gap-10 lg:gap-16',
              includeIntroInTrack
                ? 'lg:grid-cols-1'
                : 'lg:grid-cols-[0.95fr_1.05fr]',
            )}
          >
            {!includeIntroInTrack && (
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
                  <p className="max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
                    {description}
                  </p>
                )}
                {ctaLabel && (
                  <AnimatedButton
                    variant="outline"
                      className="mt-4 border-accent/50 bg-accent/10 text-[var(--text-primary)] shadow-[0_0_18px_rgba(60,185,140,0.25)] hover:border-accent/70 hover:shadow-[0_0_30px_rgba(60,185,140,0.35)]"
                  >
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </AnimatedButton>
                )}
              </div>
            )}

            <div
              ref={viewportRef}
              className="relative z-10 h-[300px] min-w-0 w-full overflow-visible sm:h-[360px] lg:h-[420px]"
            >
              <div
                ref={trackRef}
                className="flex h-full w-max items-center gap-8 transform-gpu"
              >
                {/** if includeIntroInTrack, render the intro as the first card in the track */}
                {includeIntroInTrack && (
                  <div data-horizontal-card className="relative h-full w-[80vw] shrink-0 transform-gpu sm:w-[460px] lg:w-[640px] xl:w-[720px]">
                    <div className="relative h-full w-full px-2 py-4 sm:px-4 sm:py-6 flex flex-col justify-center">
                      <div className="mb-4 text-xs uppercase tracking-[0.3em] text-white/60">{eyebrow}</div>
                      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
                      <p className="text-sm text-white/90 max-w-[32rem]">{description}</p>
                      {ctaLabel && (
                        <div className="mt-6">
                          <AnimatedButton variant="outline" className="border-accent/50 bg-accent/10 text-[var(--text-primary)]">
                            {ctaLabel}
                          </AnimatedButton>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {items.map((item) => (
                  <div
                    key={item.title}
                    data-horizontal-card
                    className="relative h-full w-[80vw] shrink-0 transform-gpu sm:w-[460px] lg:w-[640px] xl:w-[720px]"
                  >
                    <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(5,20,40,0.45)] backdrop-blur-xl">
                      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-70" />
                      <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="flex h-full flex-col">
                        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 p-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                            loading="lazy"
                            data-fallback={fallbackSrc}
                            onError={onImageError}
                            data-horizontal-image
                          />
                        </div>
                        <div className="flex flex-1 items-center px-6 pb-2 pt-2">
                          <h3 className="text-lg font-semibold text-white sm:text-xl">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
