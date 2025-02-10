import React from "react";
import { motion } from "framer-motion";

const LiveKatha = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 py-16 px-6 md:px-12">
      {/* Page Title */}
      <motion.h1
        className="text-5xl font-bold text-center text-orange-600 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Live Katha
      </motion.h1>

      {/* YouTube Video Frame */}
      <motion.div
        className="max-w-4xl mx-auto mb-12 shadow-2xl rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative aspect-w-16 aspect-h-9">
        <iframe width="900" height="400" src="https://www.youtube.com/embed/WisC0WT4nSU?si=gK_ER_oaMePutveu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>
      </motion.div>

      {/* Description Section */}
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-orange-700 mb-4">
          Bhagavad Gita Katha by Shri Pragyanand Ji Maharaj
        </h2>
        <p className="text-gray-700 mb-4">
          Join us for a divine discourse on the teachings of the Bhagavad Gita by the revered Shri Pragyanand Ji Maharaj. This live katha session will delve into the timeless wisdom of the Gita, offering insights into life, spirituality, and self-realization.
        </p>
        <p className="text-gray-700 mb-4">
          The session will be conducted in Hindi and is open to all devotees. Whether you are a seasoned practitioner or new to the teachings of the Gita, this katha will inspire and uplift your soul.
        </p>
        <p className="text-gray-700">
          <strong>Timing:</strong> Every day from 10:00 AM to 12:00 PM IST.
        </p>
      </motion.div>
    </div>
  );
};

export default LiveKatha;