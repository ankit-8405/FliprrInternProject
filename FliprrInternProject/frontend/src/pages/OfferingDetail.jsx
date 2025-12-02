import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { offeringService } from '../services/offeringService'
import { motion } from 'framer-motion'

function OfferingDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [offering, setOffering] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadOffering()
  }, [id])

  const loadOffering = async () => {
    try {
      const data = await offeringService.getOfferingById(id)
      setOffering(data)
    } catch (error) {
      console.error('Error loading offering:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!offering) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Offering not found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-800">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-indigo-600">
                Next Invest
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-indigo-600">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            ← Back
          </button>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full mb-4">
                  {offering.tag}
                </span>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {offering.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">{offering.location}</p>
                <p className="text-gray-700 mb-8">{offering.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="border-l-4 border-teal-600 pl-4">
                    <p className="text-sm text-gray-600">Amount Raised</p>
                    <p className="text-2xl font-bold text-teal-600">
                      ${offering.getPrice?.toLocaleString()}
                    </p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <p className="text-sm text-gray-600">Total Price</p>
                    <p className="text-2xl font-bold text-gray-900">
                      ${offering.totalPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <p className="text-sm text-gray-600">Min Investment</p>
                    <p className="text-2xl font-bold text-gray-900">
                      ${offering.minimumInvestment}
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <p className="text-sm text-gray-600">Investment Multiple</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {offering.investmentMultiple}x
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-600">Maturity</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {offering.maturity} months
                    </p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Funding Progress</span>
                    <span>{Math.round((offering.getPrice / offering.totalPrice) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-teal-500 h-3 rounded-full transition-all" 
                      style={{ width: `${Math.min((offering.getPrice / offering.totalPrice) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-lg mb-2">Security Type</h3>
                  <p className="text-gray-700">{offering.securityType}</p>
                </div>

                <Link
                  to="/register"
                  className="block w-full bg-indigo-600 text-white text-center py-4 rounded-lg hover:bg-indigo-700 transition text-lg font-semibold"
                >
                  Invest Now
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OfferingDetail
