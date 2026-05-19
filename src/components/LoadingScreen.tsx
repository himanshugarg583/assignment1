import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let current = 0
    const interval = window.setInterval(() => {
      current = Math.min(100, current + 2)
      setProgress(current)
      if (current >= 100) {
        window.clearInterval(interval)
        window.setTimeout(() => setLoading(false), 200)
      }
    }, 20)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--bg-primary)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="mx-auto mb-6 h-14 w-14 rounded-full border border-accent/50 bg-accent/10 shadow-glow animate-pulse" />
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Initializing EG trans
            </p>
            <div className="mx-auto mt-5 h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-xs font-semibold text-white/70">{progress}%</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
