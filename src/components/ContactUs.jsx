import { useRef, useState } from 'react'
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { sendForm } from '@emailjs/browser'
import SectionHeading from './SectionHeading'
import { profile, socialLinks } from '../data/portfolioData'
import { socialIconMap } from '../utils/socialIconMap'
import { fadeInUp, staggerContainer } from '../utils/motionVariants'

function ContactUs() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formRef.current) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          'Email service is not configured. Please add your EmailJS keys to the project environment.',
      })
      return
    }

    setIsSending(true)
    setStatus(null)

    try {
      await sendForm(serviceId, templateId, formRef.current, publicKey)

      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will contact you soon.',
      })
      event.target.reset()
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      })
      console.error('Email send error:', error)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-16 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact" subtitle="Let’s build something great together" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div variants={fadeInUp} className="rounded-xl border border-border bg-surface-card p-8 shadow-card">
            <p className="text-base leading-relaxed text-muted">
              I'm open to new opportunities, freelance projects, and collaborations. Feel free to reach out.
            </p>

            <div className="mt-8 space-y-4">
              <motion.div
                whileHover={{ y: -3 }}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-surface px-5 py-4 transition-all duration-300 hover:border-accent/40 hover:bg-surface-card hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-soft">
                  <MapPin size={22} className="text-accent" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted">Location</p>
                  <p className="font-medium text-on-surface">{profile.location}</p>
                </div>
              </motion.div>

              <motion.a
                whileHover={{ y: -3 }}
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-surface px-5 py-4 transition-all duration-300 hover:border-accent/40 hover:bg-surface-card hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-soft">
                  <Mail size={22} className="text-accent" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted">Email</p>
                  <p className="font-medium text-on-surface group-hover:text-accent transition-colors break-all">
                    {profile.email}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-muted transition-all group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

              {socialLinks
                .filter((link) => ['github', 'linkedin'].includes(link.icon))
                .map((link) => {
                  const Icon = socialIconMap[link.icon]

                  return (
                    <motion.a
                      key={link.label}
                      whileHover={{ y: -3 }}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-3xl border border-border bg-surface px-5 py-4 transition-all duration-300 hover:border-accent/40 hover:bg-surface-card hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-soft">
                        <Icon size={22} className="text-accent" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted">{link.label}</p>
                        <p className="font-medium text-on-surface group-hover:text-accent transition-colors break-all">
                          {link.shortlink}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-muted transition-all group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </motion.a>
                  )
                })}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeInUp}
            className="space-y-4 rounded-xl border border-border bg-surface-card p-8 shadow-card"
          >
            <input type="hidden" name="to_email" value={profile.email} />
            <input type="hidden" name="to_name" value="Bharat Lal" />

            <label className="block text-sm font-medium text-muted">
              Name
              <input
                name="from_name"
                type="text"
                placeholder="Your name"
                required
                className="contact-input mt-2 w-full rounded-2xl px-4 py-3 text-sm text-on-surface outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <label className="block text-sm font-medium text-muted">
              Email
              <input
                name="reply_to"
                type="email"
                placeholder="Your email"
                required
                className="contact-input mt-2 w-full rounded-2xl px-4 py-3 text-sm text-on-surface outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <label className="block text-sm font-medium text-muted">
              Message
              <textarea
                name="message"
                placeholder="Tell me about your project"
                required
                className="contact-input mt-2 w-full min-h-[160px] rounded-2xl px-4 py-3 text-sm text-on-surface outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>

            {status ? (
              <p
                className={`text-sm ${
                  status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />
              {isSending ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactUs
