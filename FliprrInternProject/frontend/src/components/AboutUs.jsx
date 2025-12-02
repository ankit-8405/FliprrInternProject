import { motion } from 'framer-motion'
import AOS from 'aos'
import { useEffect } from 'react'

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const stats = [
    { value: '$50M+', label: 'Total Invested' },
    { value: '10K+', label: 'Active Investors' },
    { value: '500+', label: 'Successful Projects' },
    { value: '98%', label: 'Success Rate' }
  ]

  const values = [
    {
      title: 'Transparency',
      description: 'Full disclosure of all investment details and risks',
      icon: '🔍'
    },
    {
      title: 'Security',
      description: 'Bank-level security for all transactions and data',
      icon: '🔒'
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology for seamless investing',
      icon: '💡'
    },
    {
      title: 'Support',
      description: '24/7 customer support for all your needs',
      icon: '🤝'
    }
  ]

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Next Invest</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're democratizing investment opportunities by connecting investors with
            high-quality, vetted projects across various sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          data-aos="fade-up"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Start Investing?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of investors who trust Next Invest
          </p>
          <a
            href="/register"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
