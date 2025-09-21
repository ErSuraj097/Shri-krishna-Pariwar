import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import TypingAnimation from './TypingAnimation';
import DualAxisOMScanner from './DualAxisOMScanner';
import Modal from './Modal';
import Button from './Button';
import NewsMarquee from "../components/NewsMarque";
import Intro from './Intro';
const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images from assets
  const backgroundImages = [
    '/src/assets/image.jpeg',
    // '/src/assets/img1.jpg',
    // '/src/assets/img2.jpg',
    // '/src/assets/img3.jpg',
    '/src/assets/img4.jpg',
    '/src/assets/img5.jpg',
    // '/src/assets/img6.jpg',
    // '/src/assets/img7.jpg',
    // '/src/assets/img8.jpg'
  ];

  const slideData = {
    title: "Shri Krishna Yogpith Pariwar",
    subtext: "श्री कृष्ण योगपीठ परिवार",
    description: "Experience divine connection through sacred OM scanning and spiritual wisdom. Join our eternal journey towards enlightenment and inner peace.",
  };

  // Auto-advance background images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative">
      {/* Background Image Container - Behind Content */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-3000 ease-in-out"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(3px)',
            opacity: '0.9',
            transform: 'scale(1.1)', // Slight zoom to prevent edge gaps
          }}
        />
      </div>

      {/* Sliding Image Container - Above Background, Behind Content */}
      {/* <div className="fixed inset-0 z-[5] overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 transition-all duration-2000 ease-in-out transform"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.7',
          }}
        />
      </div> */}

      <section
        id="home"
        className="min-h-screen relative overflow-hidden z-[10]"
      >
       
        <div className="container mx-auto mt-24   relative z-[999]">
          <div className="grid grid-cols-1 py-16 lg:grid-cols-2 gap-12 items-center border border-1 relative z-[999] bg-white/35 ">
            <div className=" px-16 text-center lg:text-left animate-fade-in-up">
              <div className="">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-Black drop-shadow-lg">
                  {slideData.title}
                </h1>

                <p className="text-lg text-black/50 max-w-lg leading-relaxed backdrop-blur-sm ">
                  {slideData.description}
                </p>

                <div className="text-lg py-8 font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
                  <TypingAnimation text="ॐ तत् सत् (Om Tat Sat)" speed={120} />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <span className="relative z-10">
                    <span className="text-base mr-2"></span>
                    Begin Divine Journey
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-gray-900     hover:border-white/40"
                >
                  {/* <FaPlay className="w-4 h-4 mr-2" /> */}
                  Watch Sacred Transmission
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <DualAxisOMScanner />
            </div>
            
          </div>
           
          
         
        </div>
          <div className="relative mt-28 z-[999]">
              <NewsMarquee />

            </div>
 
        <Modal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          // title="ॐ Divine Connection Portal"
        >
          <div className="space-y-6">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-800 to-red-800 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">ॐ</span>
              </div>
              <p className="text-gray-700 text-center text-sm">
              Our spiritual family awaits your arrival on this eternal journey.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('ॐ Divine connection established! We will contact you soon through sacred channels.'); }}>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 flex items-center">
                  {/* <span className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded mr-2 flex-shrink-0"></span> */}
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 bg-white/60 backdrop-blur-sm border border-white/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all shadow-inner"
                  placeholder="Enter your divine name..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 flex items-center">
                  {/* <span className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded mr-2 flex-shrink-0"></span> */}
                  Email Channel
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-2  bg-white/60 backdrop-blur-sm border border-white/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all shadow-inner"
                  placeholder="your.divine.channel@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 flex items-center">
                  {/* <span className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded mr-2 flex-shrink-0"></span> */}
                  Spiritual Message
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full p-2 bg-white/60 backdrop-blur-sm border border-white/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent h-28 text-gray-900 placeholder-gray-500 transition-all shadow-inner resize-none"
                  placeholder="Transmit your sacred intentions and divine calling..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsContactModalOpen(false)}
                  className="px-6 py-3 border-white/20 hover:border-white/40"
                >
                  Cancel
                </Button>
                <Button type="submit" className="px-8 py-3">
                  <span className="flex items-center">
                    <span className="mr-2">ॐ</span>
                  Submit
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </section>
     <Intro />
    </div>
  );
};

export default Hero;
