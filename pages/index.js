import Navbar from "./partials/Navbar"
import HeroSection from "./partials/HeroSection"
import Hobbies from "./partials/Hobbies"
import Projects from "./partials/Projects"
import Frameworks from "./partials/Frameworks"
import Contact from "./partials/Contact"
import Footer from "./partials/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Hobbies />
      <Projects />
      <Frameworks />
      <Contact />
      <Footer />
    </>
  )
}
