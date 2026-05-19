import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/SectionHeading'
import { TiltCard } from '@/components/TiltCard'
import { services } from '@/data/services'

export default function Services() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionHeading
          label="Services"
          title="A full-stack logistics portfolio"
          description="Each service is modular, connected, and backed by our control tower."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <TiltCard key={service.slug} className="glass-card rounded-2xl p-6">
              <service.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-base font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {service.description}
              </p>
              <Link
                to={`/services/${service.slug}`}
                className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-accent"
              >
                View details
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  )
}
