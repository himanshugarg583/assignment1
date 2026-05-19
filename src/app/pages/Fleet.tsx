import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'

export default function Fleet() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionHeading
          label="Fleet"
          title="Premium vehicles built for mission-critical freight"
          description="Modular fleet options with real-time telemetry, secure locks, and specialist handling."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {['Linehaul trucks', 'Temperature controlled', 'Hazmat certified'].map(
            (item) => (
              <GlassCard key={item} className="space-y-3">
                <p className="text-sm font-semibold text-white">{item}</p>
                <p className="text-sm text-white/70">
                  Configurable setups with safety monitoring and rapid response
                  support across Australia.
                </p>
              </GlassCard>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
