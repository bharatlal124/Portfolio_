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
  return (
    <>
      <Navbar />
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
