import Navbar from './component/navbar/Nnavbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import MouseGlow from './component/mouseglow/MouseGlow'

function App() {

  
  return (
    <>
     <div className="font-mono relative">
      <MouseGlow />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
    </div>
    </>
  )
}

export default App;
