import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

type SectionHeadingProps = {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' && 'text-center items-center',
      )}
    >
      {label ? <Badge variant="accent">{label}</Badge> : null}
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-white/70 md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
