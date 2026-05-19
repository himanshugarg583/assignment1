import { useEffect } from 'react'

export function useMousePosition() {
  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = `${event.clientX}px`
      const y = `${event.clientY}px`
      document.documentElement.style.setProperty('--cursor-x', x)
      document.documentElement.style.setProperty('--cursor-y', y)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])
}
