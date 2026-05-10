import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MarqueeStrip from '@/components/MarqueeStrip'
import About from '@/components/About'
import Clients from '@/components/Clients'
import MovieProject from '@/components/MovieProject'
import PersonalContent from '@/components/PersonalContent'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <Clients />
      <MovieProject />
      <PersonalContent />
      <Contact />
    </main>
  )
}
