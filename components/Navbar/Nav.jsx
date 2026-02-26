'use client'
import {motion} from 'motion/react'
const Nav = ()=>{


    const HandleLogin = (e)=>{
            e.preventDefault()
            window.location.href='/api/login'
    }

    return(
        <motion.div
        initial={{y:-20}}
        animate={{y:0}}
        transition={{duration:2}}
        >
<nav className="w-full bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
    
    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-black to-gray-700 flex items-center justify-center text-white font-bold text-sm">
        S
      </div>
      <span className="text-xl font-semibold tracking-tight text-gray-900">
        SupportAI
      </span>
    </div>

    {/* Nav Links */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
      <a href="#" className="hover:text-black transition-colors">
        Features
      </a>
      <a href="#" className="hover:text-black transition-colors">
        Pricing
      </a>
      <a href="#" className="hover:text-black transition-colors">
        Docs
      </a>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-4">
      <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition" onClick={HandleLogin}>
        Login
      </button>

      <button className="bg-gradient-to-r from-black to-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
        Get Started
      </button>
    </div>

  </div>
</nav>
</motion.div>
    )
}
export default Nav