"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const eventTime = new Date()
      eventTime.setHours(18, 0, 0) // 6:00 PM

      if (now > eventTime) {
        eventTime.setDate(eventTime.getDate() + 1)
      }

      const diff = eventTime.getTime() - now.getTime()

      setTimeLeft({
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="bg-orange-50 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Next Live Katha</h2>
          <motion.div className="flex justify-center space-x-4">
            <motion.div
              className="bg-white p-4 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-orange-600">{timeLeft.hours}</div>
              <div className="text-sm text-gray-600">Hours</div>
            </motion.div>
            <motion.div
              className="bg-white p-4 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-orange-600">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </motion.div>
            <motion.div
              className="bg-white p-4 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-orange-600">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-600">Seconds</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

