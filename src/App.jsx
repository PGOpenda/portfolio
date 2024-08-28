import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About  from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <main>
      <Navbar />
      <div className="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>

  ) 
}

export default App