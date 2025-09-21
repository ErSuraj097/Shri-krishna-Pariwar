"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Devotee Name",
      text: "The spiritual guidance from Shri Pragyanand Ji Maharaj has transformed my life completely.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Another Devotee",
      text: "The peace and wisdom I found here is beyond words. Truly a divine experience.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Grateful Devotee",
      text: "The teachings have helped me understand the deeper meaning of life and spirituality.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-12 bg-orange-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Devotee Experiences</h2>
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="bg-white rounded-lg shadow-md p-6 text-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* <Image
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                width={100}
                height={100}
                className="mx-auto rounded-full mb-4"
              /> */}
              <motion.p
                className="text-gray-700 text-lg mb-4 italic"
                variants={textVariants}
              >
                "{testimonials[current].text}"
              </motion.p>
              <motion.p
                className="font-semibold text-orange-600"
                variants={textVariants}
              >
                {testimonials[current].name}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === current ? "bg-orange-600" : "bg-orange-200"
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

