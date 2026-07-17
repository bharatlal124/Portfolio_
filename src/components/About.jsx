import { MapPin, Briefcase, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { about, profile } from '../data/portfolioData'
import profileImage from '../assets/bharat.jpg'
import { fadeInUp, fadeInRight, hoverLift, staggerContainer } from '../utils/motionVariants'

const highlightIcons = {
  Location: MapPin,
  Availability: Briefcase,
  Interests: Heart,
}

function About() {
  return (
    <motion.section
      id="about"
      className="bg-surface-elevated py-16 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeInRight}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent to-indigo-400 opacity-40 blur" />
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl bg-surface-card shadow-card sm:h-72 sm:w-72">
                <img
                  src={profileImage}
                  alt={profile.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            {about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                className="mb-4 text-base leading-relaxed text-muted sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {about.highlights.map((item) => {
                const Icon = highlightIcons[item.label] || MapPin
                return (
                  <motion.div
                    key={item.label}
                    variants={hoverLift}
                    whileHover="whileHover"
                    className="rounded-xl border border-border bg-surface-card p-4 shadow-card"
                  >
                    <Icon size={20} className="mb-2 text-accent" />
                    <p className="text-xs font-medium uppercase tracking-wide text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-on-surface">
                      {item.value}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
