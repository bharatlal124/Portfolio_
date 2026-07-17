import { Download, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile, socialLinks } from '../data/portfolioData'
import { socialIconMap } from '../utils/socialIconMap'
import { fadeInUp, fadeInUpDelayed, staggerContainer } from '../utils/motionVariants'

function Home() {
  return (
    <motion.section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.p
          variants={fadeInUp}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={fadeInUpDelayed(0.08)}
          className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={fadeInUpDelayed(0.16)}
          className="mt-3 text-2xl font-semibold text-muted sm:text-3xl md:text-4xl"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          variants={fadeInUpDelayed(0.24)}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={fadeInUpDelayed(0.32)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:border-accent hover:text-accent"
          >
            View Projects
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeInUpDelayed(0.4)}
          className="mt-10 flex items-center gap-4"
        >
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon]
            return (
              <motion.a
                key={link.label}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={link.href}
                target={link.icon !== 'mail' ? '_blank' : undefined}
                rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={20} />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Home
