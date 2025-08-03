'use client'

import { ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface LenisProviderProps {
  children: ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with minimal configuration
    lenisRef.current = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.8,
      infinite: false,
    })

    // Animation loop
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [])

  // Expose lenis instance globally for programmatic scrolling
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ;(window as any).lenis = lenisRef.current
    }
  }, [])

  return <>{children}</>
}
