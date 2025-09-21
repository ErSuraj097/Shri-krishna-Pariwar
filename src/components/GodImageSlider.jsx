import React, { useState, useEffect } from 'react';
import krishna from "../assets/img1.jpg";
import shiva from "../assets/img1.jpg";
import vishnu from "../assets/img1.jpg";
import lakshmi from "../assets/img1.jpg";
import TypingAnimation from './TypingAnimation';

const GodImageSlider = () => {
  const [currentGodIndex, setCurrentGodIndex] = useState(0);
  const [scanOverlay, setScanOverlay] = useState({ vertical: 0, horizontal: 0 });
  const gods = [
    { src: krishna, name: "Lord Krishna", mantra: "ॐ नमो भगवते वासुदेवाय" },
    { src: shiva, name: "Lord Shiva", mantra: "ॐ नमः शिवाय" },
    { src: vishnu, name: "Lord Vishnu", mantra: "ॐ नमो नारायणाय" },
    { src: lakshmi, name: "Goddess Lakshmi", mantra: "ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGodIndex((prevIndex) => (prevIndex + 1) % gods.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanOverlay(prev => ({
        vertical: prev.vertical >= 100 ? 0 : prev.vertical + 1,
        horizontal: prev.horizontal >= 100 ? 0 : prev.horizontal + 1.2
      }));
    }, 40);

    return () => clearInterval(scanInterval);
  }, []);

  return (
    <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 transition-opacity duration-1000">
        {gods.map((god, index) => (
          <img
            key={index}
            src={god.src}
            alt={god.name}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentGodIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 w-12 h-12 lg:w-16 lg:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-2xl lg:text-3xl font-bold text-purple-600 animate-pulse">ॐ</span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-transparent to-pink-500/30"></div>

      <div className="absolute inset-0 rounded-2xl ring-4 ring-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 ring-opacity-30 animate-pulse-slow"></div>

      <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-8 lg:w-96">
        <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {gods[currentGodIndex].name}
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
          </div>
          <div className="text-sm lg:text-base text-gray-700 mb-4 font-medium min-h-[1.5rem]">
            <TypingAnimation 
              text={gods[currentGodIndex].mantra} 
              speed={60}
            />
          </div>
          <div className="flex justify-between items-center text-xs text-gray-500 bg-gray-50/50 p-2 rounded-lg">
            <span>Divine Frequency: {Math.round(Math.random() * 100)} Hz</span>
            <span className="font-semibold text-purple-600">ॐ Active</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
        {gods.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentGodIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
              index === currentGodIndex 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125 shadow-lg before:absolute before:inset-0 before:bg-white/30 before:rounded-full' 
                : 'bg-white/50 hover:bg-white/70 hover:scale-110'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GodImageSlider;
