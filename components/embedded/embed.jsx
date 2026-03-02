"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Embed({ ownerid }) {
  const [copy, setCopy] = useState(false);

  const embeddedCode = `<script
  src="https://support-ai-beige.vercel.app/Chatbot.js"
  data-owner-id="${ownerid}"
></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embeddedCode);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-6">
    
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-2xl backdrop-blur-xl bg-white/80 border border-gray-200 shadow-2xl rounded-3xl p-8"
    >
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-800">
        Embed ChatBot
      </h2>

      <p className="text-gray-500 mt-1 mb-6">
        Copy and paste this code before {"</body>"}
      </p>

      {/* Code Box */}
      <div className="relative bg-black text-green-400 rounded-xl p-5 font-mono text-sm overflow-hidden">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 text-xs bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 transition"
        >
          {copy ? "Copied ✅" : "Copy"}
        </button>

        <pre className="leading-relaxed whitespace-pre-wrap">
{embeddedCode}
        </pre>
      </div>

      {/* Steps */}
      <ol className="space-y-4 text-gray-700 mt-6">
        <li className="flex items-start gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-sm font-semibold">1</span>
          <p>Copy the embedded code</p>
        </li>

        <li className="flex items-start gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-sm font-semibold">2</span>
          <p>
            Paste it before the closing{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">&lt;/body&gt;</code>{" "}
            tag
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-sm font-semibold">3</span>
          <p>Reload your browser</p>
        </li>
      </ol>

      {/* Divider */}
      <div className="my-8 border-t border-gray-200"></div>

      {/* Live Preview */}
      <p className="text-sm font-semibold text-gray-600 mb-3">
        Live Preview
      </p>

      <div className="relative bg-white border rounded-2xl shadow-inner overflow-hidden h-[360px]">

        <div className="bg-black text-white px-4 py-3 text-sm font-medium">
          Support Assistant
        </div>

        <div className="p-4 space-y-3 text-sm">
          <div className="bg-gray-100 p-3 rounded-lg w-fit">
            👋 Hi! How can I help you today?
          </div>

          <div className="bg-black text-white p-3 rounded-lg w-fit ml-auto">
            I need help with integration.
          </div>

          <div className="bg-gray-100 p-3 rounded-lg w-fit">
            Sure! Just paste the embed script before the
            <span className="mx-1 font-mono bg-gray-200 px-1 rounded">
              {"</body>"}
            </span>
            tag.
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-gray-400">
              Type your message...
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-lg text-sm">
              Send
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  </div>
);
}