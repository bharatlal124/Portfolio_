import { ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { certificates } from '../data/portfolioData'

function Certificate() {
  return (
    <section id="certificates" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certificates"
          subtitle="Selected certifications & achievements"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <article
              key={cert.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface-card transition-transform hover:-translate-y-1"
            >
              <div className="flex h-40 items-center justify-center overflow-hidden bg-surface-elevated">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-contain p-6"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center px-6 text-center">
                    <div className="text-sm text-muted">
                      <div className="font-semibold text-white">{cert.issuer}</div>
                      <div className="mt-1 text-xs">{cert.title}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="mt-2 text-sm text-muted">{cert.issuer} • {cert.date}</p>

                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent"
                  >
                    View Certificate
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificate
