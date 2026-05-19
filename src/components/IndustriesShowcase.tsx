import { useEffect, useRef, type SyntheticEvent } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { AnimatedButton } from '@/components/AnimatedButton'

gsap.registerPlugin(ScrollTrigger)

type IndustryItem = {
    title: string
    image: string
}

type IndustriesShowcaseProps = {
    items: IndustryItem[]
    fallbackSrc?: string
    onImageError?: (event: SyntheticEvent<HTMLImageElement>) => void
}

export function IndustriesShowcase({
    items,
    fallbackSrc,
    onImageError,
}: IndustriesShowcaseProps) {
    const sectionRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches
        if (prefersReduced) {
            return
        }

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>('[data-industry-card]')
            gsap.set(cards, { willChange: 'transform, opacity, filter' })

            cards.forEach((card, index) => {
                const startOffset = 85 - index * 2
                const endOffset = startOffset - 20

                gsap.fromTo(
                    card,
                    { y: 100, opacity: 0, filter: 'blur(8px)' },
                    {
                        y: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: `top ${startOffset}%`,
                            end: `top ${endOffset}%`,
                            scrub: true,
                        },
                    },
                )
            })

            gsap.fromTo(
                '[data-industry-copy]',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '[data-industry-copy]',
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: true,
                    },
                },
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="industries"
            className="relative overflow-hidden border-y border-white/10 bg-[var(--bg-primary)] py-16 md:py-20"
        >
            <div className="pointer-events-none absolute inset-0 bg-[url('/images/arrow-pattern.svg')] bg-[length:240px_160px] bg-repeat opacity-15" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#f4f7fb] to-[#eaf0f6]" />
            <div className="relative mx-auto w-full max-w-7xl px-6 2xl:max-w-[1400px]">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
                    <div
                        className="space-y-6 lg:sticky lg:top-24 relative z-20"
                        data-industry-copy
                    >
                        <h2 className="text-4xl font-semibold text-white/95 leading-relaxed">
                            Industries We Serve
                        </h2>
                        <p className="max-w-md text-sm text-white/95 leading-relaxed">
                            Each industry has its own logistics DNA - we tailor our services to meet yours with precision, reliability, and care.
                        </p>
                        
                        <AnimatedButton
                            variant="outline"
                            className="mt-4 flex items-center gap-2 bg-accent/15 p-4 text-sm text-[var(--text-primary)] transition hover:border-accent/60"
                        >
                        <div className="flex items-center gap-2">
                                <span>Know Our Industries</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                        
                        </AnimatedButton>
                    </div>
                    <div className="space-y-8 sm:space-y-10">
                        {items.map((industry) => (
                            <div key={industry.title} data-industry-card className="will-change-transform">
                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(5,20,40,0.45)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(25,90,160,0.35)]">
                                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-70" />
                                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <img
                                            src={industry.image}
                                            alt={industry.title}
                                            className="h-[210px] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[240px]"
                                            loading="lazy"
                                            data-fallback={fallbackSrc}
                                            onError={onImageError}
                                        />
                                    </div>
                                    <div className="px-6 pb-6 pt-2">
                                        <h3 className="text-lg font-semibold text-white sm:text-xl">
                                            {industry.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
