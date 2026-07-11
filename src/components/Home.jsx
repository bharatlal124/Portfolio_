import { Download, ArrowDown } from 'lucide-react'
import { profile, socialLinks } from '../data/portfolioData'
import { socialIconMap } from '../utils/socialIconMap'

function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="animate-fade-in-up mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Hello, I&apos;m
        </p>

        <h1 className="animate-fade-in-up-delay text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <h2 className="animate-fade-in-up-delay mt-3 text-2xl font-semibold text-muted sm:text-3xl md:text-4xl">
          {profile.title}
        </h2>

        <p className="animate-fade-in-up-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </p>

        <div className="animate-fade-in-up-delay-2 mt-10 flex flex-wrap items-center gap-4">
          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            View Projects
            <ArrowDown size={18} />
          </a>
        </div>

        <div className="animate-fade-in-up-delay-2 mt-10 flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon]
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon !== 'mail' ? '_blank' : undefined}
                rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Home
