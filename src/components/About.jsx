import { MapPin, Briefcase, Heart } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { about, profile } from '../data/portfolioData'
import profileImage from '../assets/bharat.jpg'

const highlightIcons = {
  Location: MapPin,
  Availability: Briefcase,
  Interests: Heart,
}

function About() {
  return (
    <section id="about" className="bg-surface-elevated py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center">
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
          </div>

          <div>
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 text-base leading-relaxed text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {about.highlights.map((item) => {
                const Icon = highlightIcons[item.label] || MapPin
                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border bg-surface-card p-4 shadow-card"
                  >
                    <Icon size={20} className="mb-2 text-accent" />
                    <p className="text-xs font-medium uppercase tracking-wide text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-on-surface">
                      {item.value}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
