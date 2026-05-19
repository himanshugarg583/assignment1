import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

export function GlassCard({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'glass-panel rounded-2xl border p-6 text-white shadow-glass',
        className,
      )}
      {...props}
    />
  )
}
