'use client'

import { motion } from "motion/react"
import Link from "next/link"

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-12 text-center max-w-lg w-full"
      >

        {/* Big Gradient Text */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent"
        >
          Something Went Wrong
        </motion.h1>

        <p className="mt-6 text-gray-600 text-sm md:text-base">
          An unexpected error occurred. Please try again or return to home.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          
          <button
            onClick={() => reset()}
            className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="border border-gray-300 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all"
          >
            Go Home
          </Link>

        </div>

      </motion.div>
    </div>
  )
}