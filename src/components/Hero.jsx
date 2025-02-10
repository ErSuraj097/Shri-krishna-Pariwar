import React from 'react';
import { motion } from 'framer-motion';
import NewsMarque from './NewsMarque';
import EventCountdown from './EventCountdown';
import QuickLinks from './QuickLinks';
import UpcomingEvents from './UpcomingEvents';
import Testimonials from './Testimonials';

import img from "../assets/img1.jpg";
import Intro from './Intro';

const Hero = () => {
  return (

    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen">
        <div className="absolute inset-0">
          <img
            src={img}
            alt="Shri Krishna Yogpith Pariwar Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
          >
            Shri Krishna Yogpith Pariwar
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            श्री कृष्ण योगपीठ परिवार
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl text-lg sm:text-xl md:text-2xl text-white px-4 mb-4"
          >
            राधे राधे
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl text-sm sm:text-lg md:text-xl text-white px-4"
          >
            Discover the divine teachings of Shri Pragyanand Ji Maharaj and embark on a spiritual journey of
            self-discovery through ancient Vedic wisdom and contemporary guidance.
          </motion.p>
        </div>

        {/* News Marquee */}
        <div className="absolute bottom-0 w-full">
          <NewsMarque />
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">

          <Intro/>
          {/* <EventCountdown />
          <QuickLinks />
          <UpcomingEvents />
          <Testimonials /> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
