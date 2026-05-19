import { useEffect, useState, type SyntheticEvent } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Star, ArrowRight } from 'lucide-react'
import { initScrollReveals } from '@/animations/gsap'
import { AnimatedButton } from '@/components/AnimatedButton'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { GlassCard } from '@/components/GlassCard'
import { HorizontalScrollShowcase } from '@/components/HorizontalScrollShowcase'
import { StackedCardsShowcase } from '@/components/StackedCardsShowcase'
import { Marquee } from '@/components/Marquee'
import { SectionHeading } from '@/components/SectionHeading'
import { TiltCard } from '@/components/TiltCard'
import { Badge } from '@/components/ui/badge'

import { services } from '@/data/services'
import { stats } from '@/data/stats'
import { testimonials } from '@/data/testimonials'
import { timelineSteps } from '@/data/timeline'
import heroFallback from '@/assets/hero.png'

const fleetImage = '/img2.jpeg'
const corridorImage = '/img3.jpeg'
// const galleryRail = [...galleryImages, ...galleryImages]
const trustpilotStars = Array.from({ length: 5 }, (_, index) => index)

const trustedBrands = [
  '/logos/dsv.svg',
  '/logos/sainsburys.svg',
  '/logos/thatchers.svg',
  '/logos/tradechoice.svg',
  '/logos/mands.svg',
  '/logos/lidl.svg',
  '/logos/osborne.svg',
  '/logos/apple.svg',
]

const enterpriseHighlights = [
  {
    title: 'Real-time tracking',
    detail: 'Live GPS visibility and milestone alerts on every shipment.',
  },
  {
    title: 'Route optimization',
    detail: 'Dynamic routing to keep deliveries on time and on budget.',
  },
  {
    title: 'Warehouse systems',
    detail: 'Inventory control with secure storage and rapid dispatch.',
  },
  {
    title: 'Customer portal',
    detail: 'Self-serve booking, tracking, and proof-of-delivery access.',
  },
  {
    title: 'Compliance reporting',
    detail: 'Audit-ready documentation and safety-first operations.',
  },
]

const quickFacts = [
  {
    value: 98.6,
    suffix: '%',
    decimals: 1,
    label: 'On-Time Delivery Rate.',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'GPS Tracking Coverage.',
  },
  {
    value: 50,
    prefix: '+',
    label: 'Total Vehicles',
  },
  {
    value: 99.5,
    suffix: '%',
    decimals: 1,
    label: 'Customer Satisfaction',
  },
]

const servicesSpotlight = [
  {
    id: '01',
    title: 'Road Freight Services',
    image: '/img9.jpeg',
  },
  {
    id: '02',
    title: 'Warehousing Services',
    image: '/img10.jpeg',
  },
]

const industriesSpotlight = [
  {
    title: 'Manufacturing & Distribution',
    image: '/img5.jpeg',
  },
  {
    title: 'Restaurants',
    image: '/img2.jpeg',
  },
  {
    title: 'Transportation Industry',
    image: '/img10.jpeg',
  },
  {
    title: 'Automotive Industry',
    image: '/img9.jpeg',
  },
  {
    title: 'Pharmaceutical Industry',
    image: '/img13.jpeg',
  },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  const containerClass =
    'mx-auto w-full max-w-7xl px-6 2xl:max-w-[1400px]'
  const revealMotion = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const fallback = event.currentTarget.dataset.fallback
    if (fallback && event.currentTarget.src !== fallback) {
      event.currentTarget.src = fallback
    }
  }

  useEffect(() => {
    initScrollReveals()
  }, [initScrollReveals])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <section id="home" className="relative pt-10 md:pt-16">
        <div className={containerClass}>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-7">
              <Badge variant="accent" data-gsap="fade-left" data-delay="0.05">
                EG trans | Division of ELOMA GROUP
              </Badge>
              <h1
                className="text-4xl font-semibold leading-tight text-white md:text-6xl"
                data-gsap="fade-up"
                data-delay="0.12"
              >
                Road Freight & Warehousing, Done Right
              </h1>
              <div className="mb-4" data-gsap="fade-up" data-delay="0.14">
                <p className="flex items-center gap-3 text-base md:text-sm font-semibold text-white">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  We are one of the first and Only Logistics company to be registered member of United Nations.
                </p>
              </div>
              <div className="flex items-center gap-4" data-gsap="fade-up" data-delay="0.24">
                <AnimatedButton>Request a Quote</AnimatedButton>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <ArrowRight className="h-5 w-5 text-white/80" />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/70" data-gsap="zoom-in" data-delay="0.3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                    <Star className="h-5 w-5 text-accent" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Trustpilot — Verified reviews
                    </p>
                    <div className="flex items-center gap-1">
                      {trustpilotStars.map((index) => (
                        <Star
                          key={`trustpilot-star-${index}`}
                          className="h-4 w-4 text-accent"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-white/60">25+ years experience • 190k+ deliveries • 98% on-time</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:ml-auto">
                  Read our reviews
                  <span className="text-accent">-&gt;</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-end" data-gsap="fade-right" data-delay="0.15">
              <div className=" overflow-hidden  w-full max-w-[640px]">
                <img
                  src={corridorImage}
                  alt="Highway delivery corridor"
                  className="w-full object-contain max-h-[360px] sm:max-h-[420px] lg:max-h-[520px]"
                  loading="eager"
                  data-fallback={heroFallback}
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 py-6 mt-10">
          <div className={containerClass}>
          <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-white/60">
            KEEPING UK BUSINESSES MOVING SINCE 2015
          </p>
          <Marquee items={trustedBrands} />
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/5 py-12 md:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[url('/images/arrow-pattern.svg')] bg-[length:240px_160px] bg-repeat opacity-30" />
        <div className={`${containerClass} relative`}>
          <div className="grid gap-10 lg:items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="space-y-6" data-gsap="fade-left" data-repeat="true" data-delay="0.05">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/60">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-accent/60">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
                Quick Facts
              </div>
              <h2 className="max-w-xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Trusted by dozens of Companies across Industries.
              </h2>
            </div>
            <div
              className="grid gap-x-14 gap-y-10 sm:grid-cols-2"
              data-gsap="fade-right"
              data-repeat="true"
              data-delay="0.15"
            >
              {quickFacts.map((fact) => (
                <AnimatedCounter
                  key={fact.label}
                  value={fact.value}
                  prefix={fact.prefix}
                  suffix={fact.suffix}
                  decimals={fact.decimals}
                  label={fact.label}
                  className="space-y-3"
                  valueClassName="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
                  labelClassName="text-sm text-white/60"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <StackedCardsShowcase
        id="services"
        eyebrow="Our Services"
        title="Our Services"
        description="From temperature-controlled transport to regional distribution - we have got it covered."
        items={servicesSpotlight}
        fallbackSrc={heroFallback}
        onImageError={handleImageError}
        theme="dark"
      />

      <HorizontalScrollShowcase
        id="industries"
        eyebrow="Industries"
        title="Industries We Serve"
        description="Each industry has its own logistics DNA - we tailor our services to meet yours with precision, reliability, and care."
        items={industriesSpotlight}
        fallbackSrc={heroFallback}
        onImageError={handleImageError}
        ctaLabel="Know Our Industries"
        includeIntroInTrack={true}
        theme="darker"
      />

      <section id="who-we-are" className="section-padding">
        <div className={containerClass}>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6" data-gsap="reveal">
              <SectionHeading
                label="Why EG TRANS"
                title="Why Leading Businesses Rely on Us"
                description="We combine smart operations with real-world reliability to move what matters — faster, safer, and smarter."
              />
              <div className="grid gap-4 md:grid-cols-2">
                <GlassCard className="space-y-3">
                  <Sparkles className="h-6 w-6 text-accent" />
                  <p className="text-sm text-white/80">
                    Dedicated account teams delivering SLA-driven performance and proactive updates.
                  </p>
                </GlassCard>
                <GlassCard className="space-y-3">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                  <p className="text-sm text-white/80">
                    Safety-first operations with audited compliance and secure chain-of-custody controls.
                  </p>
                </GlassCard>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <GlassCard className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    24/7 Control Tower
                  </p>
                  <p className="text-sm text-white/70">
                    Centralised operations with real-time exception handling and SLA monitoring.
                  </p>
                </GlassCard>
                <GlassCard className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Risk & Compliance
                  </p>
                  <p className="text-sm text-white/70">
                    Industry-leading safety standards, driver training, and full audit trails.
                  </p>
                </GlassCard>
              </div>
            </div>

            <motion.div {...revealMotion} className="space-y-6">
              <div className="relative overflow-hidden ">
                {/* <img
                  src={fleetImage}
                  alt="Long haul fleet on a rainy highway"
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  loading="lazy"
                  data-fallback={heroFallback}
                  onError={handleImageError}
                /> */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/80 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Trusted coverage
                  </p>
                  <p className="text-sm text-white/80">
                    Reliable, compliant delivery across metro and regional lanes.
                  </p>
                </div>
              </div>
              <div className="glass-card rounded-3xl border border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Our process
                </p>
                <div className="mt-6 space-y-5">
                  {timelineSteps.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 text-xs font-semibold text-accent">
                        0{index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {step.title}
                        </p>
                        <p className="text-xs text-white/60">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="what-we-offer" className="section-padding">
        <div className={containerClass}>
          <SectionHeading
            label="Our Solutions"
            title="Freight, warehousing and integrated supply chain services"
            description="Enterprise-grade transport, refrigerated logistics, and fulfilment services with real-time visibility and operational SLAs."
            align="center"
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative" data-gsap="fade-right" data-delay="0.15">
              <div className="relative overflow-hidden rounded-[28px] rounded-tr-full rounded-bl-[140px] border border-white/10 bg-transparent shadow-none sm:rounded-[32px] lg:rounded-[36px]">
                <img
                  src={'/img8.jpeg'}
                  alt="Highway delivery corridor"
                  className="h-[360px] w-full object-fit sm:h-[420px] lg:h-[520px]"
                  loading="eager"
                  data-fallback={heroFallback}
                  onError={handleImageError}
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <TiltCard key={service.title} className="glass-card rounded-2xl p-6">
                  <service.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {service.description}
                  </p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* 
      <section id="industries" className="section-padding">
        <div className={containerClass}>
          <SectionHeading
            label="Industries"
            title="Logistics for critical industries"
            description="Tailored logistics programs for retail, healthcare, manufacturing, construction and food supply chains."
            align="center"
          />
        </div>
        <div className="mt-10 space-y-6 overflow-hidden" data-gsap="reveal">
          <div
            className="flex w-max animate-marquee gap-6"
            style={{ animationDuration: '32s' }}
          >
            {galleryRail.map((src, index) => (
              <div
                key={`gallery-top-${index}`}
                className="relative h-[180px] w-[280px] overflow-hidden rounded-hero border border-white/10 bg-white/5 sm:h-[220px] sm:w-[360px] lg:h-[240px] lg:w-[420px]"
              >
                <img
                  src={src}
                  alt="Logistics corridor snapshot"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  data-fallback={heroFallback}
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050a13]/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>
          <div
            className="flex w-max animate-marquee gap-6"
            style={{ animationDuration: '40s', animationDirection: 'reverse' }}
          >
            {galleryRail.map((src, index) => (
              <div
                key={`gallery-bottom-${index}`}
                className="relative h-[180px] w-[280px] overflow-hidden rounded-hero border border-white/10 bg-white/5 sm:h-[220px] sm:w-[360px] lg:h-[240px] lg:w-[420px]"
              >
                <img
                  src={src}
                  alt="Freight network snapshot"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  data-fallback={heroFallback}
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050a13]/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section-padding">
        <div className={containerClass}>
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Industry Standards
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                The EG Trans
              </h2>
              <p className="max-w-3xl text-sm text-white/70 sm:text-base">
                Registered with the United Nations Global Compact and aligned with WEPs principles - driving ethics, inclusion, and accountability in every operation. Our focus on safety, driver wellness, and transparency ensures responsible logistics and trusted global partnerships.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <img
                  src="/img7.jpeg"
                  alt="Industry standards illustration"
                  className="h-14 w-auto rounded"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold text-white">
                  UN Global Compact Member
                </h3>
                <p className="text-sm text-white/70 sm:text-base">
                  EG Trans proudly participates in the United Nations Global Compact, aligning our business strategies with universal principles on human rights, labour, environment, and anti-corruption.
                </p>
                <p className="text-sm text-white/70">Know more</p>
              </div>
              <div className="space-y-2">
                <img
                  src="/img11.jpeg"
                  alt="Industry standards illustration"
                  className="h-14 w-auto rounded"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold text-white">
                  WEPs Commitment
                </h3>
                <p className="text-sm text-white/70 sm:text-base">
                  We're signatories of the Women's Empowerment Principles (WEPs), promoting gender equality and empowering women across all levels of our organization.
                </p>
                <p className="text-sm text-white/70">Know more</p>
              </div>
              <div className="space-y-2">
                <img
                  src="/img1.jpeg"
                  alt="Industry standards illustration"
                  className="h-14 w-auto rounded"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold text-white">
                  VTA Member
                </h3>
                <p className="text-sm text-white/70 sm:text-base">
                  As active members of the Victorian Transport Association (VTA), we follow best practices in logistics, safety, and workforce development across Australia's transport industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className={containerClass}>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4" data-gsap="reveal">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="p-6 text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="section-padding">
        <div className={containerClass}>
          <SectionHeading
            label="Technologies"
            title="Smart logistics technology for end-to-end visibility"
            description="Horizontal momentum that mirrors how freight moves across the network."
          />
        </div>
        <div className="mt-10 overflow-hidden">
          <div
            className="flex gap-6"
            data-gsap="horizontal"
            data-distance="220"
          >
            {enterpriseHighlights.map((item) => (
              <div
                key={item.title}
                className="min-w-[260px] rounded-3xl border border-white/10 bg-white/5 p-6 sm:min-w-[320px]"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm text-white/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fleet" className="section-padding">
        <div className={containerClass}>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              {...revealMotion}
              className="relative min-h-[320px] overflow-hidden rounded-hero border border-white/10 bg-white/5 lg:min-h-[420px]"
            >
              <img
                src={fleetImage}
                alt="Modern freight fleet in motion"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                data-fallback={heroFallback}
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/80 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Premium fleet
                </p>
                <p className="text-sm text-white/80">
                  Dedicated assets with live telemetry, compliance, and smart locks.
                </p>
              </div>
            </motion.div>
            <div className="space-y-8" data-gsap="reveal">
              <SectionHeading
                label="Our Fleet"
                title="Modern, compliant fleet for every freight requirement"
                description="Telematics-enabled vehicles, scheduled maintenance, and flexible capacity to support peak and contract logistics programs."
              />
              <div className="grid gap-6 md:grid-cols-2">
                {['Smart trailers', 'Secure containers', 'Rapid response vans', 'Heavy haul rigs'].map(
                  (label) => (
                    <div
                      key={label}
                      className="glass-card relative overflow-hidden rounded-3xl p-6"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
                      <div className="relative space-y-4">
                        <p className="text-sm font-semibold text-white">{label}</p>
                        <p className="text-sm text-white/60">
                          Modular fleet equipped with GPS locks, predictive maintenance,
                          and live telemetry.
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className={containerClass}>
          <SectionHeading
            label="Client feedback"
            title="Trusted by mission-critical teams"
            description="Operators rely on our on-time performance, safety standards and responsive support when outcomes matter most."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3" data-gsap="reveal">
            {testimonials.map((testimonial, index) => (
              <GlassCard
                key={testimonial.name}
                className={`transition-all ${
                  index === activeTestimonial
                    ? 'scale-[1.02] border-accent/40'
                    : 'opacity-70'
                }`}
              >
                <p className="text-sm text-white/70">{testimonial.quote}</p>
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-white/50">
                  {testimonial.name}
                </div>
                <div className="text-xs text-white/40">{testimonial.role}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="reach-us" className="section-padding">
        <div className={containerClass}>
          <div className="glass-card relative overflow-hidden  p-10 text-center">
            
            <div />
            <div className="relative space-y-6">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Talk to our logistics specialists for enterprise solutions
              </h2>
              <p className="text-base text-white/70">
                Share your requirements and our operations team will propose a
                tailored plan to improve efficiency, reduce cost and meet SLAs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedButton>Get a Quote</AnimatedButton>
                <AnimatedButton variant="outline">Contact Us</AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="login" className="h-0" />
    </div>
  )
}
