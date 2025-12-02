import { motion } from 'framer-motion'
import AOS from 'aos'
import { useEffect } from 'react'

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up in minutes and complete your investor profile',
      icon: '👤'
    },
    {
      number: '02',
      title: 'Browse Opportunities',
      description: 'Explore vetted investment opportunities across various sectors',
      icon: '🔍'
    },
    {
      number: '03',
      title: 'Invest',
      description: 'Choose your investment amount and complete the transaction securely',
      icon: '💰'
    },
    {
      number: '04',
      title: 'Track & Earn',
      description: 'Monitor your investments and receive returns directly to your account',
      icon: '📈'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start investing in just 4 simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow h-full">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="text-5xl font-bold text-indigo-100 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
