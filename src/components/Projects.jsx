import { useState } from 'react'
import { ExternalLink, FolderOpen, ChevronDown, ChevronUp } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolioData'

function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 4)
  const hasMoreProjects = projects.length > 4

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" subtitle="Featured Work" />

        <div className="grid gap-6 sm:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className="group card-base flex flex-col overflow-hidden rounded-xl transition-all duration-500 ease-out"
              style={{
                animation: showAll ? 'fadeSlideDown 0.45s ease-out forwards' : undefined,
                animationDelay: showAll ? `${index * 80}ms` : undefined,
              }}
            >
              <div className="flex h-44 items-center justify-center overflow-hidden bg-surface-elevated">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <FolderOpen
                    size={48}
                    className="text-border transition-colors group-hover:text-accent"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-on-surface">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-surface px-2 py-0.5 text-xs text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-md text-muted transition-colors hover:text-accent"
                  >
                    <GitHubIcon size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-md text-muted transition-colors hover:text-accent"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-surface-card/80 px-6 py-3 text-sm font-medium text-accent shadow-[0_0_0_1px_rgba(99,102,241,0.15)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-surface-elevated hover:text-on-surface"
            >
              {showAll ? 'View Less' : 'View More'}
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
