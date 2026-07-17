import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolioData'
import { fadeInUp, staggerContainer, hoverLift } from '../utils/motionVariants'

function Experience() {
  return (
    <motion.section
      id="experience"
      className=" py-16 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-0 hidden h-full w-px bg-border sm:left-4 sm:block" />

          <div className="space-y-10">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="relative sm:pl-12"
                variants={fadeInUp}
              >
                <div className="absolute left-0 top-0.1 hidden h-3 w-3 rounded-full border-2 border-accent bg-surface sm:left-[10px] sm:block" />

                <motion.div
                  className="rounded-xl card-base p-6"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-on-surface">
                        {job.role}
                      </h3>
                      <p className="text-sm font-medium text-accent">
                        {job.company}
                      </p>
                    </div>
                    <span className="mt-1 text-sm text-muted sm:mt-0">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
