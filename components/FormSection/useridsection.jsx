  "use client";
  
import { motion } from "framer-motion";
const Data = ({Userid})=>{
    return(
    


    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-semibold mb-2">ChatBot Settings</h2>
        <p className="text-gray-500 mb-6">
          Manage your AI chatbot knowledge and business details
        </p>

        {/* Business Details */}
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-medium">Business Details</h3>

          <input
            type="text"
            placeholder="Business Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Support Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Knowledge Base */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Knowledge Base</h3>

          <textarea
            rows="6"
            placeholder="Add FAQs, policies, delivery info, refunds, etc."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="bg-black text-white px-6 py-2 rounded-xl font-medium shadow-md"
        >
          Save
        </motion.button>
      </motion.div>

    </div>
  
    )
}

export default Data