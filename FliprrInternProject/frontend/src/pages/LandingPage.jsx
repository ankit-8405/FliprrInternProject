import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import OfferingsSection from '../components/OfferingsSection'
import HowItWorks from '../components/HowItWorks'
import AboutUs from '../components/AboutUs'
import StatsSection from '../components/StatsSection'
import RaiseCapitalSection from '../components/RaiseCapitalSection'
import Footer from '../components/Footer'

const LandingPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts (page loads/refreshes)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OfferingsSection />
      <HowItWorks />
      <AboutUs />
      <StatsSection />
      <RaiseCapitalSection />
      <Footer />
    </div>
  )
}

export default LandingPage
