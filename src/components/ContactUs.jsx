import { useRef, useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { sendForm } from '@emailjs/browser'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'
import { socialIconMap } from '../utils/socialIconMap'
import {  socialLinks } from '../data/portfolioData'

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
    <section id="contact" className="bg-surface-elevated py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact" subtitle="Let’s build something great together" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-xl border border-border bg-surface-card p-8 shadow-sm">
            <p className="text-base leading-relaxed text-muted">
              I’m always open to new opportunities and collaborations. Send a message to discuss projects, freelance work, or just say hello.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-3 rounded-3xl border border-border bg-surface px-5 py-4">
                <MapPin size={20} className="text-accent" />
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="text-white">{profile.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-3xl border border-border bg-surface px-5 py-4">
                <Mail size={20} className="text-accent" />
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-white transition-colors hover:text-accent"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

                {/* Social icon */}
            <div className="rounded-3xl border border-border bg-surface px-5 py-4">
  {/* <p className="mb-4 text-sm text-muted">Connect with me</p> */}

  <div className="space-y-3">
    {socialLinks
      .filter((link) => ['github', 'linkedin'].includes(link.icon))
      .map((link) => {
        const Icon = socialIconMap[link.icon]

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 transition-all hover:border-accent hover:bg-surface-card"
          >
            <Icon size={20} className="text-accent" />
            <span className="text-white">{link.label}</span>
          </a>
        )
      })}
  </div>
</div>



            </div>

            

          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-border bg-surface-card p-8"
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
                className="contact-input mt-2 w-full rounded-2xl px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <label className="block text-sm font-medium text-muted">
              Email
              <input
                name="reply_to"
                type="email"
                placeholder="Your email"
                required
                className="contact-input mt-2 w-full rounded-2xl px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <label className="block text-sm font-medium text-muted">
              Message
              <textarea
                name="message"
                placeholder="Tell me about your project"
                required
                className="contact-input mt-2 w-full min-h-[160px] rounded-2xl px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
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

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
