import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motionVariants'

function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      className="mb-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-muted sm:text-lg">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
    </motion.div>
  )
}

export default SectionHeading
