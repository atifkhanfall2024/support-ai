export const dynamic = "force-dynamic";
import React from "react";

import {
  FaRobot,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaChartLine,
  FaCogs
} from "react-icons/fa";

const featuresData = [
  {
    icon: <FaRobot size={28} />,
    title: "AI-Powered Responses",
    description:
      "Smart AI engine delivers instant and intelligent responses using advanced LLM technology."
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Secure Authentication",
    description:
      "JWT-based authentication and protected routes ensure secure user access."
  },
  {
    icon: <FaBolt size={28} />,
    title: "Real-Time Chat",
    description:
      "Lightning-fast real-time messaging with seamless communication experience."
  },
  {
    icon: <FaUsers size={28} />,
    title: "Multi-User Support",
    description:
      "Designed to handle multiple users and scale efficiently for growing businesses."
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Analytics Dashboard",
    description:
      "Track performance, user interactions, and chatbot activity in a clean dashboard."
  },
  {
    icon: <FaCogs size={28} />,
    title: "Customizable Integration",
    description:
      "Easily embed and customize the chatbot for any website or platform."
  }
];

const Features = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the advanced capabilities that make our AI-powered platform
            efficient, scalable, and intelligent.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300 hover:scale-105"
            >
              <div className="text-blue-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;