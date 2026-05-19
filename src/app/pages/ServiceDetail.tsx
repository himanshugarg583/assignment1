import { useParams, Link } from 'react-router-dom'
import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'
import { services } from '@/data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <div className="section-padding">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            label="Service"
            title="Service not found"
            description="Return to services to explore our full portfolio."
          />
          <Link className="text-accent" to="/services">
            Back to services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-5xl space-y-10 px-6">
        <SectionHeading
          label="Service"
          title={service.title}
          description={service.description}
        />
        <GlassCard className="space-y-4">
          <service.icon className="h-8 w-8 text-accent" />
          <p className="text-sm text-white/70">
            Our {service.title.toLowerCase()} program is designed for enterprise
            shippers who need reliability, compliance, and premium visibility.
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Live tracking with proactive notifications</li>
            <li>Dedicated customer success partner</li>
            <li>Secure custody documentation and audit trails</li>
          </ul>
        </GlassCard>
      </div>
    </div>
  )
}
