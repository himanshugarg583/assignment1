import { useMousePosition } from '@/hooks/useMousePosition'

export function CursorGlow() {
  useMousePosition()
  return <div className="cursor-glow" />
}
