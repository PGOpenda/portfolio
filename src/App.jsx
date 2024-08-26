import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About  from './components/About'

function App() {

  return (
    <main>
      <Navbar />
      <div className="main">
        <Hero />
        <About />
      </div>
       
    </main>

  ) 
}

export default App
