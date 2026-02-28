'use client'
import { motion } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import Image from "next/image"
import { useRouter } from 'next/navigation'

const Nav = ({ email , picture }) => {

    const router = useRouter()

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const HandleLogin = (e) => {
    e.preventDefault()
    window.location.href = '/api/login'
  }

  const HandleLogout = async(e) => {
      try {
          // handle logout 
    e.preventDefault()
     await fetch("/api/logout", {
    method: "POST",
    credentials: "include",
  });
  setOpen(false)
 window.location.reload()
      } catch (error) {
         console.log(error?.message);
      }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
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
            <a href="#" className="hover:text-black transition-colors">Features</a>
            <a href="#" className="hover:text-black transition-colors">Pricing</a>
            <a href="#" className="hover:text-black transition-colors">Docs</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 relative">

            {!email ? (
              <button
                className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition"
                onClick={HandleLogin}
              >
                Login
              </button>
            ) : (
              <div className="relative" ref={dropdownRef}>
                
<Image
  src={picture}
  alt="Profile"
  width={36}
  height={36}
  onClick={() => setOpen(!open)}
  className="w-9 h-9 rounded-full  object-cover cursor-pointer hover:scale-105 transition"
/>

                {/* Dropdown */}
                {open && (
                  <div className="absolute right-0 mt-3 w-40 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                    <button
                      onClick={() => window.location.href = '/getstarted'}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={HandleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            <button className="bg-gradient-to-r from-black to-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300" onClick={()=>router.push('/dashboard/textForm')}>
              Get Started
            </button>

          </div>
        </div>
      </nav>
    </motion.div>
  )
}

export default Nav