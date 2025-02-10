import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewsMarque from './NewsMarque';
import Intro from './Intro';

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const images = [
  { src: img1, text: "Shri Krishna Yogpith Pariwar", subtext: "श्री कृष्ण योगपीठ परिवार" },
  { src: img2, text: "Divine Teachings of Shri Pragyanand Ji Maharaj", subtext: "राधे राधे" },
  { src: img3, text: "Embark on a Spiritual Journey", subtext: "Discover ancient Vedic wisdom" }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] xl:h-screen overflow-hidden">
        <div className="absolute inset-0">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={item.src}
                alt={item.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            key={images[currentIndex].text}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
          >
            {images[currentIndex].text}
          </motion.h1>

          <motion.h2
            key={images[currentIndex].subtext}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            {images[currentIndex].subtext}
          </motion.h2>
        </div>

        <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} transition-all duration-300`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 w-full">
          <NewsMarque />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Intro />
        </div>
      </section>
    </div>
  );
};

export default Hero;