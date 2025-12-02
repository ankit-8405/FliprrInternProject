import { useState, useEffect } from 'react'
import { offeringService } from '../services/offeringService'
import OfferingCard from './OfferingCard'

const OfferingsSection = () => {
  const [offerings, setOfferings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOfferings()
  }, [])

  const fetchOfferings = async () => {
    try {
      const data = await offeringService.getAllOfferings()
      setOfferings(data)
    } catch (error) {
      console.error('Error fetching offerings:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="offerings" className="py-20 bg-white relative overflow-hidden">
      {/* Shape.svg - Left Side Top */}
      <div className="absolute top-[45%] left-0 opacity-80">
        <img src="/assest/Next Invest - Landing Page (images)/Shape.svg" alt="" className="w-32 h-auto" />
      </div>
      
      {/* Decorative Circle Pattern - Right Side (Exact position from reference) */}
      <div className="absolute top-20 right-8 opacity-15">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <circle cx="70" cy="70" r="60" stroke="#50E3C2" strokeWidth="3" strokeDasharray="10 10"/>
          <circle cx="70" cy="70" r="45" stroke="#50E3C2" strokeWidth="2.5" strokeDasharray="8 8"/>
          <circle cx="70" cy="70" r="30" stroke="#50E3C2" strokeWidth="2" strokeDasharray="6 6"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Offerings open for investment
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Explore pre-vetted investment opportunities available in a growing number of industry categories.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading offerings...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => {
              // Override images for both rows
              const imageOverrides = {
                0: '/assest/Next Invest - Landing Page (images)/10.svg',
                1: '/assest/Next Invest - Landing Page (images)/12.svg',
                2: '/assest/Next Invest - Landing Page (images)/8.svg',
                3: '/assest/Next Invest - Landing Page (images)/11.svg',
                4: '/assest/Next Invest - Landing Page (images)/7.svg',
                5: '/assest/Next Invest - Landing Page (images)/9.svg'
              };
              
              const offeringWithImage = {
                ...offering,
                image: imageOverrides[index] || offering.image
              };
              
              return (
                <div key={offering.id} data-aos="fade-up" data-aos-delay={index * 100}>
                  <OfferingCard offering={offeringWithImage} />
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-16" data-aos="fade-up">
          <button className="border-2 border-pink-400 text-pink-400 hover:bg-pink-50 font-medium px-10 py-3 rounded transition-all duration-300">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  )
}

export default OfferingsSection
