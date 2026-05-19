import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'
import { industries } from '@/data/industries'

export default function Industries() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionHeading
          label="Industries"
          title="Expertise across complex sectors"
          description="We support specialized compliance requirements for every industry we serve."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <GlassCard key={industry} className="p-4 text-sm text-white/70">
              {industry}
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
