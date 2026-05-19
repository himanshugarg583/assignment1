import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useMagnetic } from '@/hooks/useMagnetic'

type AnimatedButtonProps =
  Omit<HTMLMotionProps<'button'>, 'children'> & {
    variant?: 'primary' | 'outline'
    children: ReactNode
  }

export function AnimatedButton({
  className,
  variant = 'primary',
  children,
  ...props
}: AnimatedButtonProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic()

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-transform',
        variant === 'primary'
          ? 'bg-accent text-ink shadow-glow hover:-translate-y-0.5'
          : 'border border-white/25 bg-white/5 text-white hover:border-accent/60 hover:text-accent',
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 rounded-full bg-accent/30 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
