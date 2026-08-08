import { useEffect, useRef, useState } from 'react'

/**
 * Tracks the current scroll direction ('down' | 'up').
 * Small movements (< threshold) are ignored so it doesn't
 * flicker on tiny scroll jitters (e.g. trackpad, mobile bounce).
 */
export default function useScrollDirection(threshold = 6) {
    const [direction, setDirection] = useState('down')
    const lastY = useRef(0)

    useEffect(() => {
        lastY.current = window.scrollY

        const handleScroll = () => {
            const currentY = window.scrollY
            const diff = currentY - lastY.current

            if (Math.abs(diff) > threshold) {
                setDirection(diff > 0 ? 'down' : 'up')
                lastY.current = currentY
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [threshold])

    return direction
}
