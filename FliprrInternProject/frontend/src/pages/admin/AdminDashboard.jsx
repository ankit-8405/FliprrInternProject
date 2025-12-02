import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../../services/authService'
import { offeringService } from '../../services/offeringService'
import { newsletterService } from '../../services/newsletterService'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [stats, setStats] = useState({ offerings: 0, subscribers: 0 })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [offerings, subscribers] = await Promise.all([
        offeringService.getAllOfferings(),
        newsletterService.getAllSubscribers()
      ])
      setStats({ offerings: offerings.length, subscribers: subscribers.length })
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const handleLogout = () => {
    authService.logout()
    navigate('/admin/login')
  }

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Investments',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: '#4A90E2',
      backgroundColor: 'rgba(74, 144, 226, 0.1)',
      tension: 0.4
    }]
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
            <button onClick={handleLogout} className="btn-primary">Logout</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600 mb-2">Total Offerings</h3>
            <p className="text-4xl font-bold text-primary">{stats.offerings}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600 mb-2">Newsletter Subscribers</h3>
            <p className="text-4xl font-bold text-secondary">{stats.subscribers}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600 mb-2">Total Investments</h3>
            <p className="text-4xl font-bold text-accent">$7M+</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Investment Trends</h3>
            <Line data={chartData} />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <Link to="/admin/offerings" className="block btn-primary text-center">
                Manage Offerings
              </Link>
              <Link to="/admin/subscribers" className="block btn-secondary text-center">
                View Subscribers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
