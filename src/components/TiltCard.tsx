import { useState } from 'react'
import type { CSSProperties, HTMLAttributes, MouseEvent } from 'react'
import { cn } from '@/lib/utils'

type TiltCardProps = HTMLAttributes<HTMLDivElement> & {
  intensity?: number
}

export function TiltCard({
  className,
  intensity = 12,
  children,
  ...props
}: TiltCardProps) {
  const [style, setStyle] = useState<CSSProperties>({
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)',
  })

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x / rect.width) * 2 - 1) * intensity
    const rotateX = -((y / rect.height) * 2 - 1) * intensity
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })
  }

  const handleLeave = () => {
    setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' })
  }

  return (
    <div
      className={cn('transition-transform duration-300', className)}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </div>
  )
}
