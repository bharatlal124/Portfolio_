import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="bg-surface-elevated py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-0 hidden h-full w-px bg-border sm:left-4 sm:block" />

          <div className="space-y-10">
            {experience.map((job, index) => (
              <div key={index} className="relative sm:pl-12">
                <div className="absolute left-0 top-1.5 hidden h-3 w-3 rounded-full border-2 border-accent bg-surface sm:left-[13px] sm:block" />

                <div className="rounded-xl border border-border bg-surface-card p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
