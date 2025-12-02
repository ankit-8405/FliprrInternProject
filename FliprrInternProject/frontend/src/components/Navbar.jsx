import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-teal-600 tracking-wide">
            NEXT INVEST
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#offerings" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-teal-600 transition text-sm cursor-pointer"
            >
              Investment Opportunities
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-teal-600 transition text-sm flex items-center gap-1 cursor-pointer"
            >
              How it works
              <img src="/assest/Next Invest - Landing Page (Icons)/CaretDown.svg" alt="" className="w-2.5 h-2.5" />
            </a>
            <a 
              href="#about-us" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-teal-600 transition text-sm cursor-pointer"
            >
              About us
            </a>
            <Link to="/login" className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2 rounded text-sm transition">
              LOGIN
            </Link>
            <Link to="/register" className="border-2 border-pink-400 text-pink-400 hover:bg-pink-50 font-medium px-6 py-2 rounded text-sm transition">
              REGISTER
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-3">
            <a 
              href="#offerings" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="block text-gray-700 hover:text-teal-600"
            >
              Investment Opportunities
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="block text-gray-700 hover:text-teal-600"
            >
              How it works
            </a>
            <a 
              href="#about-us" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="block text-gray-700 hover:text-teal-600"
            >
              About us
            </a>
            <Link to="/login" className="bg-teal-500 text-white font-medium px-6 py-2 rounded w-full block text-center">LOGIN</Link>
            <Link to="/register" className="border-2 border-pink-400 text-pink-400 font-medium px-6 py-2 rounded w-full block text-center">REGISTER</Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
