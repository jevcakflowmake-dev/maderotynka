import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Packages from './components/Packages'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Packages />
      <Reviews />
      <Contact />
    </main>
  )
}
