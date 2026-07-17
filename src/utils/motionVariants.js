export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: 'easeOut' },
  },
}

export const fadeInUpDelayed = (delay = 0.18) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, delay, ease: 'easeOut' },
  },
})

export const fadeInRight = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: 'easeOut' },
  },
}

export const hoverLift = {
  whileHover: {
    y: -4,
    boxShadow: '0px 24px 64px rgba(15, 23, 42, 0.12)',
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}
