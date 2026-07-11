import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  )
}

export default App
