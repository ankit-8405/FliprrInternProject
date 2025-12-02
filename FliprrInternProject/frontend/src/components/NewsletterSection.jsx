import { useState } from 'react'
import { newsletterService } from '../services/newsletterService'
import { motion } from 'framer-motion'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await newsletterService.subscribe(email)
      setStatus({ type: 'success', message: 'Successfully subscribed!' })
      setEmail('')
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Subscription failed. Please try again.' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-3xl shadow-2xl p-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto">
            Get the latest investment opportunities delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-8 py-5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-lg"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-12 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {status.message && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-6 font-medium text-lg ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
            >
              {status.message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSection
