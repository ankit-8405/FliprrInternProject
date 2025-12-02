import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const OfferingCard = ({ offering }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -12, scale: 1.02 }}
      className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
      data-aos="fade-up"
    >
      {/* Card Image with Tags */}
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={offering.image} 
          alt={offering.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {offering.tag?.split(',').map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-900/90 text-white px-3 py-1 rounded text-xs font-medium uppercase tracking-wide backdrop-blur-sm"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
      
      {/* Card Content - Normal State */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{offering.title}</h3>
        <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {offering.location}
        </p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{offering.description}</p>
        
        {/* Price Info - Always Visible */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-teal-600">
              ${offering.getPrice?.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">raised of</span>
            <span className="text-sm font-semibold text-gray-700">
              ${offering.totalPrice?.toLocaleString()}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className="bg-teal-500 h-1.5 rounded-full transition-all" 
              style={{ width: `${Math.min((offering.getPrice / offering.totalPrice) * 100, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Hover Details */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Security Type</span>
              <span className="font-semibold text-gray-900">{offering.securityType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Investment Multiple</span>
              <span className="font-semibold text-teal-600">{offering.investmentMultiple}x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Maturity</span>
              <span className="font-semibold text-gray-900">{offering.maturity} Months</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Min. Investment</span>
              <span className="font-semibold text-gray-900">${offering.minimumInvestment?.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>
        
        {/* View Button */}
        <Link 
          to={`/offering/${offering.id}`}
          className="block w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center uppercase text-sm tracking-wide"
        >
          VIEW
        </Link>
      </div>
    </motion.div>
  )
}

export default OfferingCard
