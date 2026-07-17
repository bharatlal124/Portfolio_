import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolioData'
import { fadeInUp, staggerContainer, hoverLift } from '../utils/motionVariants'

function Skills() {
  return (
    <motion.section
      id="skills"
      className="bg-surface-elevated py-16 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          subtitle="Tech Stack"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="rounded-xl card-base p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-on-surface">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
