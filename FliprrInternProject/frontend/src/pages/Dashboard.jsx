import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { offeringService } from '../services/offeringService'

function Dashboard() {
  const [user, setUser] = useState(null)
  const [offerings, setOfferings] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      navigate('/login')
      return
    }
    setUser(JSON.parse(userData))
    loadOfferings()
  }, [navigate])

  const loadOfferings = async () => {
    try {
      const data = await offeringService.getAllOfferings()
      setOfferings(data)
    } catch (error) {
      console.error('Error loading offerings:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Next Invest</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name || user?.email}</span>
              <button
                onClick={handleLogout}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Investment Dashboard</h2>
            <p className="mt-2 text-gray-600">Browse and manage your investment opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering) => (
              <div key={offering.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mb-2">
                    {offering.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{offering.title}</h3>
                  <p className="text-gray-600 mb-2">{offering.location}</p>
                  <p className="text-gray-700 mb-4">{offering.description}</p>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Price:</span>
                      <span className="font-semibold">${offering.totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Min Investment:</span>
                      <span className="font-semibold">${offering.minimumInvestment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Multiple:</span>
                      <span className="font-semibold">{offering.investmentMultiple}x</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                    Invest Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {offerings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No investment opportunities available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
