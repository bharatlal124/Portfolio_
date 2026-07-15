import { navLinks, socialLinks, footer } from '../data/portfolioData'
import { socialIconMap } from '../utils/socialIconMap'

function Footer() {
  return (
    <footer className="bg-surface-elevated border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted">{footer.copyright}</p>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon !== 'mail' ? '_blank' : undefined}
                  rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted/60">
          {footer.credit}
        </p>
      </div>
    </footer>
  )
}

export default Footer
