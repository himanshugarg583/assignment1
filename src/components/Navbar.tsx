import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { navItems } from '@/data/nav'
import { AnimatedButton } from '@/components/AnimatedButton'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 2xl:max-w-[1680px]">
        <div
          className={cn(
            'glass-panel flex w-full items-center justify-between rounded-full border border-soft px-6 py-3',
            scrolled && 'shadow-glass',
          )}
        >
          <div className="flex items-center gap-2.5 h-10 w-[100px]">
            <img
              src="/img14.png"
              alt="EG trans"
              className=" shrink-0 object-contain"
            />
           
          </div>

          <nav className="hidden items-center gap-4 whitespace-nowrap lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 transition hover:text-white underline-hover',
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:1800710388"
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 transition hover:text-accent"
            >
              <Phone className="h-4 w-4" />
              1800 710 388
            </a>
            <AnimatedButton className="px-4 py-2 text-[11px]">Request a Quote</AnimatedButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="glass-panel absolute left-6 right-6 top-20 rounded-3xl border border-soft p-6 lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3">
                <a
                  href="tel:1800710388"
                  className="flex items-center justify-between rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
                >
                  Call 1800 710 388
                  <Phone className="h-4 w-4" />
                </a>
                <AnimatedButton>Request a Quote</AnimatedButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
