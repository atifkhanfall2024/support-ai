'use client'
import { motion } from "motion/react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-12 text-center max-w-lg w-full"
      >
        
        {/* Floating 404 */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <h2 className="mt-6 text-2xl font-semibold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/dashboard"
            className="inline-block bg-gradient-to-r from-black to-gray-800 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>

      </motion.div>
    </div>
  )
}