import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export default function About() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          label="About"
          title="Built on precision, powered by people"
          description="Firstpoint Logistics blends advanced routing intelligence with a human-first service model. Our mission is to eliminate uncertainty from freight operations."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-white">Our Mission</p>
            <p className="text-sm text-white/70">
              Deliver with certainty across Australia by connecting every
              shipment to proactive logistics intelligence.
            </p>
          </GlassCard>
          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-white">Our Vision</p>
            <p className="text-sm text-white/70">
              Build the most trusted logistics platform for enterprise teams
              that cannot afford downtime.
            </p>
          </GlassCard>
          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-white">Our Values</p>
            <p className="text-sm text-white/70">
              Precision, accountability, and clarity in every handoff and every
              client relationship.
            </p>
          </GlassCard>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <GlassCard className="text-center">
            <AnimatedCounter value={12} suffix="+" label="Years operating" />
          </GlassCard>
          <GlassCard className="text-center">
            <AnimatedCounter value={48} suffix="h" label="Avg. response" />
          </GlassCard>
          <GlassCard className="text-center">
            <AnimatedCounter value={92} suffix="%" label="On-time performance" />
          </GlassCard>
          <GlassCard className="text-center">
            <AnimatedCounter value={28} suffix="%" label="Carbon reduction" />
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
