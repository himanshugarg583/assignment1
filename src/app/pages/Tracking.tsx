import { useEffect, useState } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'
import { Progress } from '@/components/ui/progress'
import { shipments } from '@/data/shipments'

export default function Tracking() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionHeading
          label="Tracking"
          title="Control tower shipment visibility"
          description="Monitor each shipment with predictive ETAs and milestone alerts."
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <GlassCard className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Active shipments
            </p>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className="h-20 rounded-xl bg-white/5 animate-pulse"
                  />
                ))
              : shipments.map((shipment) => (
                  <div
                    key={shipment.id}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center justify-between text-sm text-white/80">
                      <span>{shipment.id}</span>
                      <span className="text-accent">{shipment.status}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-white/50">
                      <span>{shipment.origin}</span>
                      <span>{shipment.destination}</span>
                    </div>
                    <div className="mt-3">
                      <Progress value={shipment.progress} />
                    </div>
                    <div className="mt-2 text-xs text-white/60">
                      ETA: {shipment.eta}
                    </div>
                  </div>
                ))}
          </GlassCard>

          <GlassCard className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Live status
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div>Temperature: Stable</div>
              <div>Driver check-in: 4 min ago</div>
              <div>Geo-fence: Active</div>
              <div>Last update: 12:24 PM</div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
