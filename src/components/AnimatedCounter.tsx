import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

type AnimatedCounterProps = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label?: string
  className?: string
  valueClassName?: string
  labelClassName?: string
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  className,
  valueClassName,
  labelClassName,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 120, damping: 20 })
  const [display, setDisplay] = useState(0)
  const decimalsFactor = Math.pow(10, decimals)

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, motionValue, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplay(Math.round(latest * decimalsFactor) / decimalsFactor)
    })
    return () => unsubscribe()
  }, [decimalsFactor, springValue])

  const formatted = display.toFixed(decimals)

  return (
    <div ref={ref} className={cn('space-y-2', className)}>
      <div className={cn('text-3xl font-semibold text-white md:text-4xl', valueClassName)}>
        {prefix}
        {formatted}
        {suffix}
      </div>
      {label ? <p className={cn('text-sm text-white/60', labelClassName)}>{label}</p> : null}
    </div>
  )
}
