'use client'
import {motion} from 'motion/react'
const Hero = ()=>{
    return(
        <motion.div
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut" 
          }}
        >
<section className="w-full bg-white">
  <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
    
    {/* Left Content */}
    <div>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
        AI Customer Support  
        <span className="block bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
          Built for Modern Websites
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
        Add a powerful AI chatbot to your website in minutes.  
        Let your customers get instant answers using your own business knowledge.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="bg-black text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Get Started
        </button>

        <button className="px-7 py-3 rounded-full font-semibold border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>

    {/* Right Side Preview Card */}
    <div className="relative">
      <div className="absolute -top-6 -right-6 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-40"></div>

      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
        <p className="text-sm text-gray-400 mb-4">Live Chat Preview</p>

        <div className="bg-gray-100 p-3 rounded-xl text-sm text-gray-700 w-fit">
          Do you offer cash on delivery?
        </div>

        <div className="mt-4 flex justify-end">
          <div className="bg-black text-white p-3 rounded-xl text-sm max-w-xs">
            Yes, Cash on Delivery is available.
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
</motion.div>
    )
}

export default Hero