import { useState, useEffect } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-100 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Left Section - Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">NEXT INVEST</h3>
            <p className="text-gray-500 text-sm">
              Copyright © 2020 Logitronum. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-teal-600 transition">Email Marketing</a></li>
              <li><a href="#" className="hover:text-teal-600 transition">Campaigns</a></li>
              <li><a href="#" className="hover:text-teal-600 transition">Branding</a></li>
              <li><a href="#" className="hover:text-teal-600 transition">Offline</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">About</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-teal-600 transition">Our Story</a></li>
              <li><a href="#" className="hover:text-teal-600 transition">Benefits</a></li>
              <li><a href="#" className="hover:text-teal-600 transition">Team</a></li>
              <li><a href="#" className="hover:text-teal-600 transition">Careers</a></li>
            </ul>
          </div>

          {/* Social Icons - Right Side */}
          <div className="flex justify-end items-start">
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-teal-600 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-teal-600 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-teal-600 transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Bottom */}
        <div className="border-t border-gray-300 pt-8 mt-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">Subscribe to our newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md transition">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Green Circle with Arrow */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  )
}

export default Footer
