// Reusable variant factories for scroll-direction-aware reveal animations.
// direction: 'down' -> element rises up into place (comes from below)
// direction: 'up'   -> element drops down into place (comes from above)

export const fadeVariants = (direction, distance = 50, duration = 0.6) => ({
    hidden: { opacity: 0, y: direction === 'down' ? distance : -distance },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: 'easeOut' }
    }
})

export const scaleVariants = (direction, distance = 40, duration = 0.55) => ({
    hidden: { opacity: 0, y: direction === 'down' ? distance : -distance, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration, ease: 'easeOut' }
    }
})

export const popVariants = (direction, distance = 20, duration = 0.45) => ({
    hidden: { opacity: 0, y: direction === 'down' ? distance : -distance, scale: 0.6 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration, ease: 'backOut' }
    }
})

export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
    hidden: {},
    show: {
        transition: { staggerChildren: stagger, delayChildren }
    }
})

// Standard viewport config: replays every time the element enters/leaves
export const scrollViewport = (amount = 0.25) => ({ once: false, amount })
