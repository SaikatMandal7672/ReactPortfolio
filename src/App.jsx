
import { SpeedInsights } from '@vercel/speed-insights/react';
import Intro from './components/Intro'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'


const App = () => {
  
    
  return (
    <>
        <main className='font-light text-white antialiased selection:bg-lime-300 selection:text-black '>
          <Intro />
          <Nav />
          <Hero />
          <Marquee />
          <Projects />
          <About />
          <Work />
          <Contact />
        </main>
    </>
  )
}

export default App