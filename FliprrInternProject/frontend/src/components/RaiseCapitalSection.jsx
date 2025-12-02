import { motion } from 'framer-motion'

const RaiseCapitalSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Shape.svg - Right Side */}
      <div className="absolute top-[35%] right-0 opacity-100">
        <img src="/assest/Next Invest - Landing Page (images)/Shape.svg" alt="" className="w-32 h-auto" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Looking to raise capital for your growing business?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you're looking to expand, hire more staff, or invest in new equipment, 
              we can help you access the capital you need to grow your business. Join hundreds 
              of successful businesses that have raised capital through our platform.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded transition-all duration-300 uppercase text-sm tracking-wide">
              APPLY ONLINE
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="/assest/Next Invest - Landing Page (images)/cuate (2).svg" 
              alt="Raise Capital"
              className="w-full drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RaiseCapitalSection
