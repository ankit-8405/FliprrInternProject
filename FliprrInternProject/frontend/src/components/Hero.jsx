import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layer 1: Background photo (bottom layer) */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/assest/Next Invest - Landing Page (images)/3.svg')",
        }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Layer 2: Blue circle (middle layer) - 5.svg - Left 15%, Top 20% */}
      <motion.img
        src="/assest/Next Invest - Landing Page (images)/5.svg"
        style={{ left: '15%', top: '20%' }}
        className="absolute z-10 w-[400px] h-[400px] md:w-[500px] md:h-[500px] opacity-60 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Layer 3: Diagonal lines (right side) - 6.svg */}
      <motion.img
        src="/assest/Next Invest - Landing Page (images)/6.svg"
        className="absolute right-0 bottom-0 w-[420px] md:w-[500px] opacity-70 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />

      {/* Layer 4: Text & button (top layer) - Left aligned */}
      <div className="absolute left-[25%] top-[35%] z-30 max-w-2xl text-left px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5"
        >
          Meaningful investments in
          <br />
          Main Street businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base text-white/90 mb-8 leading-relaxed"
        >
          Browse vetted investment offerings in
          <br />
          communities all over the US.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/register"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-2.5 rounded shadow-lg hover:shadow-xl transition-all duration-300 uppercase text-xs tracking-wide"
          >
            GET STARTED
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
