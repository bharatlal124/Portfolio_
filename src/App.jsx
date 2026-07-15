import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Certificate from './components/Certificate'
import ContactUs from './components/ContactUs'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme)
      return
    }

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    setTheme(prefersLight ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificate />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}

export default App
