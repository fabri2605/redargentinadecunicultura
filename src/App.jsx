import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VideoSection from './components/VideoSection'
import Congress from './components/Congress'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Congress />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
