import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData'

const sectionIds = navLinks.map((link) => link.href.slice(1))

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-surface/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-bold text-white transition-colors hover:text-accent"
          onClick={() => handleNavClick('#home')}
        >
          {profile.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent'
                    : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-muted transition-colors hover:bg-surface-elevated hover:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-b border-border bg-surface-elevated md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-card hover:text-accent ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent'
                      : 'text-muted'
                  }`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
