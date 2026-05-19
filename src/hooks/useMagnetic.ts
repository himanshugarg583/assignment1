import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { useSpring } from 'framer-motion'

export function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLButtonElement | null>(null)
  const x = useSpring(0, { stiffness: 220, damping: 18 })
  const y = useSpring(0, { stiffness: 220, damping: 18 })

  const handleMouseMove = (event: MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, x, y, handleMouseMove, handleMouseLeave }
}
