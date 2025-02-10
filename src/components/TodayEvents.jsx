import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"; // Import icons

const events = [
  {
    id: 1,
    title: "Morning Meditation Session",
    time: "6:00 AM - 7:00 AM",
    description: "Start your day with peace and mindfulness in our meditation session.",
    location: "Shri Krishna Yogpith Temple",
  },
  {
    id: 2,
    title: "Bhagavad Gita Discourse",
    time: "10:00 AM - 12:00 PM",
    description: "Join the spiritual discourse on Bhagavad Gita by Shri Pragyanand Ji Maharaj.",
    location: "Main Hall",
  },
  {
    id: 3,
    title: "Evening Aarti & Bhajan",
    time: "6:30 PM - 8:00 PM",
    description: "Experience divine bliss with Aarti and soulful Bhajans.",
    location: "Temple Courtyard",
  },
];

const TodayEvents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 py-10 px-6 md:px-12"> {/* Gradient background */}
      <motion.div
        className="text-center mb-8" // Container for title and subtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-orange-600 mb-2">Today's Events</h1>
        {/* Optional Subtitle */}
        <p className="text-gray-600 text-lg">Join us for a day of spiritual enrichment.</p> 
      </motion.div>

      {events?.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition duration-300 border-l-4 border-orange-500" // Hover effect
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: event.id * 0.2 }}
            >
              <div className="flex items-center mb-2"> {/* Title with icon */}
                <h2 className="text-2xl font-semibold text-orange-700 mr-2">{event.title}</h2>
              </div>

              <div className="flex items-center text-gray-600 mb-1"> {/* Time with icon */}
                <FaClock className="mr-2" /> {event.time}
              </div>

              <p className="mt-2 text-gray-700">{event.description}</p>

              <div className="mt-3 flex items-center text-sm text-gray-500"> {/* Location with icon */}
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location}</span> {/* Wrapped location in a span */}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.p
          className="text-center text-xl text-gray-600 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No events scheduled for today.
        </motion.p>
      )}
    </div>
  );
};

export default TodayEvents;