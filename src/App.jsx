import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About  from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EntranceAnimation from './components/EntranceAnimation'

function App() {

  return (
    <main>
      <EntranceAnimation>
        <Navbar animationType="slideLeft"/>
          <Hero duration={1.5}/>
          <About />
          <Projects />
          <Contact />
      </EntranceAnimation>
      <Footer />
    </main>

  ) 
}

export default App