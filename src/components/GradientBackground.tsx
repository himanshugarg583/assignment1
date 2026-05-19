import { cn } from '@/lib/utils'

export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute inset-0 -z-10 bg-mesh bg-[length:800px_800px] opacity-70',
        className,
      )}
    />
  )
}
