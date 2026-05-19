import { AnimatedButton } from '@/components/AnimatedButton'

const standardServices = [
  'Same-day',
  'Next-day',
  'International',
  'Multi-drop',
  'Haulage',
  'European',
]

const managedServices = [
  'Warehousing and distribution',
  'Customs declarations',
  'Project logistics solutions',
]

const bespokeServices = [
  'White glove',
  'Last-mile',
  'Abnormal load',
  'Two-man courier',
  'ADR courier',
]

const companyLinks = [
  'Why EG trans',
  'Case studies',
  'Become a courier',
  'Talk to sales',
]

export function Footer() {
  return (
    <footer className="relative bg-[var(--bg-secondary)] px-6 pb-16 pt-16 text-[var(--text-primary)]">
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr_1.2fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/image.png" alt="EG trans" className="h-12 w-auto" />
              <div>
                <div className="text-2xl font-semibold">EG trans</div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Division of ELOMA GROUP
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Road freight, warehousing, and distribution services built for
              dependable delivery and real-time visibility.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Standard delivery services
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {standardServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Managed delivery services
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {managedServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Bespoke delivery services
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {bespokeServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Why EG trans
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {companyLinks.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-8 text-[#08213C] shadow-soft">
            <h3 className="text-lg font-semibold">Make an enquiry</h3>
            <form className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="footer-name"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[#08213C]/70"
                >
                  Name *
                </label>
                <input
                  id="footer-name"
                  className="mt-2 w-full border-b border-slate-200 bg-transparent py-2 text-sm text-[#08213C] focus:border-accent focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="footer-phone"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[#08213C]/70"
                >
                  Phone number *
                </label>
                <input
                  id="footer-phone"
                  className="mt-2 w-full border-b border-slate-200 bg-transparent py-2 text-sm text-[#08213C] focus:border-accent focus:outline-none"
                  placeholder="+61"
                />
              </div>
              <div>
                <label
                  htmlFor="footer-email"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[#08213C]/70"
                >
                  Email *
                </label>
                <input
                  id="footer-email"
                  className="mt-2 w-full border-b border-slate-200 bg-transparent py-2 text-sm text-[#08213C] focus:border-accent focus:outline-none"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="footer-enquiry"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[#08213C]/70"
                >
                  Enquiry type *
                </label>
                <select
                  id="footer-enquiry"
                  className="mt-2 w-full border-b border-slate-200 bg-transparent py-2 text-sm text-[#08213C] focus:border-accent focus:outline-none"
                >
                  <option>Request a quote</option>
                  <option>Freight partnership</option>
                  <option>Warehousing</option>
                  <option>Customs support</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="footer-message"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[#08213C]/70"
                >
                  Message *
                </label>
                <textarea
                  id="footer-message"
                  rows={3}
                  className="mt-2 w-full resize-none border-b border-slate-200 bg-transparent py-2 text-sm text-[#08213C] focus:border-accent focus:outline-none"
                  placeholder="Tell us about your shipment"
                />
              </div>
              <AnimatedButton className="w-full justify-center">Submit enquiry</AnimatedButton>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <span>2026 EG trans. All rights reserved.</span>
          <span>Privacy | Terms | Security</span>
        </div>
      </div>
    </footer>
  )
}
