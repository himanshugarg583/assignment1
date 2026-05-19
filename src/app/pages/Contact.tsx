import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { AnimatedButton } from '@/components/AnimatedButton'

export default function Contact() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionHeading
          label="Contact"
          title="Connect with our logistics specialists"
          description="Tell us about your shipment and we will respond with a tailored plan."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="you@company.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Company name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your shipment" />
            </div>
            <AnimatedButton>Send message</AnimatedButton>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard className="space-y-3">
              <p className="text-sm font-semibold text-white">Sydney HQ</p>
              <p className="text-sm text-white/60">
                Level 12, 200 George Street, Sydney NSW
              </p>
              <p className="text-sm text-white/60">+61 2 9000 0000</p>
            </GlassCard>
            <GlassCard className="space-y-3">
              <p className="text-sm font-semibold text-white">Melbourne Hub</p>
              <p className="text-sm text-white/60">
                80 Collins Street, Melbourne VIC
              </p>
              <p className="text-sm text-white/60">+61 3 9000 0000</p>
            </GlassCard>
            <GlassCard className="h-40 bg-gradient-to-br from-accent/20 via-white/5 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}
