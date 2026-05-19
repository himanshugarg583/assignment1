import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initScrollReveals() {
  const buildReveal = (
    selector: string,
    fromVars: gsap.TweenVars,
  ) => {
    const elements = gsap.utils.toArray<HTMLElement>(selector)
    elements.forEach((element) => {
      const delay = Number(element.dataset.delay) || 0
      const duration = Number(element.dataset.duration) || 1
      const start = element.dataset.start || 'top 80%'
      const repeat = element.dataset.repeat === 'true' || element.dataset.repeat === '1'
      const toVars: gsap.TweenVars = {
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: repeat ? 'play reverse play reverse' : 'play none none none',
        },
      }

      if (Object.prototype.hasOwnProperty.call(fromVars, 'x')) {
        toVars.x = 0
      }
      if (Object.prototype.hasOwnProperty.call(fromVars, 'y')) {
        toVars.y = 0
      }
      if (Object.prototype.hasOwnProperty.call(fromVars, 'scale')) {
        toVars.scale = 1
      }

      gsap.fromTo(element, { opacity: 0, ...fromVars }, toVars)
    })
  }

  buildReveal('[data-gsap="reveal"]', { y: 40 })
  buildReveal('[data-gsap="fade-up"]', { y: 40 })
  buildReveal('[data-gsap="fade-left"]', { x: -40 })
  buildReveal('[data-gsap="fade-right"]', { x: 40 })
  buildReveal('[data-gsap="zoom-in"]', { scale: 0.94 })
  buildReveal('[data-gsap="zoom-up"]', { scale: 0.94, y: 30 })

  const horizontal = gsap.utils.toArray<HTMLElement>('[data-gsap="horizontal"]')
  horizontal.forEach((element) => {
    const distance = Number(element.dataset.distance) || 160
    gsap.fromTo(
      element,
      { x: distance },
      {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  })
}
