import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'
import { jobs } from '@/data/jobs'
import { AnimatedButton } from '@/components/AnimatedButton'

export default function Careers() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionHeading
          label="Careers"
          title="Build the future of logistics"
          description="Join a team building a next-generation logistics platform with global impact."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <GlassCard key={job.title} className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-white">{job.title}</p>
                <p className="text-xs text-white/50">
                  {job.location} · {job.type}
                </p>
              </div>
              <p className="text-sm text-white/70">{job.description}</p>
              <AnimatedButton variant="outline">Apply now</AnimatedButton>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
