import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image, Phone, Youtube } from 'lucide-react';
import { Button } from '@headlessui/react';
import EventCountdown from './EventCountdown';
import QuickLinks from './QuickLinks';
import UpcomingEvents from './UpcomingEvents';
import Testimonials from './Testimonials';

import img from "../assets/img1.jpg"
import NewsMarque from './NewsMarque';

const Hero = () => {
  return (
    <>
    
    
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh]">
        {/* <Image
          src="/placeholder.svg?"
        
        /> */}
        <div className=' items-center justify-item-center'>

        <img src={img} 
          alt="Shri Krishna Yogpith Pariwar Temple"
          fill
          className="object-cover w-[90%] h-[90%] items-center justify-center"
          priority />


        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold  mb-4">Shri Krishna Yogpith Pariwar</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">श्री कृष्ण योगपीठ परिवार</h2>
          <p className="max-w-3xl text-lg md:text-xl mb-8">राधे राधे</p>
          <p className="max-w-3xl text-lg md:text-xl">
            Discover the divine teachings of Shri Pragyanand Ji Maharaj and embark on a spiritual journey of
            self-discovery through ancient Vedic wisdom and contemporary guidance.
          </p>

          </div>
          <NewsMarque/>
         
        </div>
       
      
      </section>

   

      {/* News Ticker */}
      

      
    </div></>

    // <div className="relative h-screen flex items-center justify-center text-white">
    //   <div className="absolute inset-0 overflow-hidden">
    //     <img
    //       src="/images/hero-background.jpg"
    //       alt="Shri Pragyanand Ji Maharaj"
    //       className="w-full h-full object-cover"
    //     />
    //     <div className="absolute inset-0 bg-black opacity-50"></div>
    //   </div>
    //   <div className="relative z-10 text-center">
    //     <motion.h1
    //       initial={{ opacity: 0, y: -50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5 }}
    //       className="text-4xl md:text-6xl font-bold mb-4"
    //     >
    //       Welcome to Shri Krishna Yogpith Pariwar
    //     </motion.h1>
    //     <motion.p
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5, delay: 0.2 }}
    //       className="text-xl md:text-2xl mb-8"
    //     >
    //       Discover the spiritual teachings of Shri Pragyanand Ji Maharaj
    //     </motion.p>
    //     <motion.button
    //       initial={{ opacity: 0, scale: 0.5 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 0.5, delay: 0.4 }}
    //       className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
    //     >
    //       Explore Our Teachings
    //     </motion.button>
    //   </div>
    // </div>
 );
};

export default Hero;