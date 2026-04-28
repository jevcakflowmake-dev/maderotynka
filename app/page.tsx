import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Packages from './components/Packages'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Packages />
      <Gallery />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
