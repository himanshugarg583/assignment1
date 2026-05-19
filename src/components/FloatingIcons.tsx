import { motion } from 'framer-motion'
import { Radar, Ship, Truck, Warehouse, MapPin } from 'lucide-react'

const icons = [Truck, Ship, Warehouse, Radar, MapPin]

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {icons.map((Icon, index) => (
        <motion.div
          key={Icon.name}
          className="absolute text-accent/60"
          style={{
            top: `${15 + index * 14}%`,
            left: `${8 + index * 18}%`,
          }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
      ))}
    </div>
  )
}
