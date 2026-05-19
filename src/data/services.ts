import {
  Boxes,
  Plane,
  Truck,
  Warehouse,
  Waypoints,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ServiceItem = {
  slug: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: ServiceItem[] = [
  {
    slug: 'road-freight',
    title: 'Road Freight Transport',
    description:
      'Efficient national and regional road freight with priority lanes and dynamic routing for time-critical cargo.',
    icon: Truck,
  },
  {
    slug: 'warehousing-distribution',
    title: 'Warehousing & Distribution',
    description:
      'Secure, scalable warehousing with integrated inventory, pick & pack, and same-day dispatch capability.',
    icon: Warehouse,
  },
  {
    slug: 'refrigerated-transport',
    title: 'Refrigerated Transport',
    description:
      'Temperature-controlled logistics with end-to-end monitoring for pharma, food, and sensitive goods.',
    icon: Boxes,
  },
  {
    slug: 'fleet-management',
    title: 'Fleet Management',
    description:
      'Managed fleet services including telematics, maintenance, and compliance to maximise uptime and efficiency.',
    icon: Waypoints,
  },
  {
    slug: 'supply-chain-solutions',
    title: 'Supply Chain Solutions',
    description:
      'End-to-end supply chain design and optimisation to reduce lead times and lower total cost of ownership.',
    icon: Plane,
  },
  {
    slug: 'real-time-tracking',
    title: 'Real-time Tracking & Visibility',
    description:
      'Live GPS visibility and milestone alerts with portal access and API integrations for enterprise systems.',
    icon: Waypoints,
  },

]
