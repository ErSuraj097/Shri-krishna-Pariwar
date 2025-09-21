import React, { useState, useEffect } from 'react';

const DualAxisOMScanner = () => {
  const [verticalScan, setVerticalScan] = useState(0);
  const [horizontalScan, setHorizontalScan] = useState(0);
  const [scanPhase, setScanPhase] = useState('vertical'); // 'vertical', 'horizontal', 'both'
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    let verticalInterval;
    if (scanPhase === 'vertical' || scanPhase === 'both') {
      verticalInterval = setInterval(() => {
        setVerticalScan(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1.5;
        });
      }, 30);
    }
    return () => clearInterval(verticalInterval);
  }, [scanPhase]);

  useEffect(() => {
    let horizontalInterval;
    if (scanPhase === 'horizontal' || scanPhase === 'both') {
      horizontalInterval = setInterval(() => {
        setHorizontalScan(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1.5;
        });
      }, 30);
    }
    return () => clearInterval(horizontalInterval);
  }, [scanPhase]);

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setScanPhase(prev => {
        if (prev === 'vertical') return 'horizontal';
        if (prev === 'horizontal') return 'both';
        return 'vertical';
      });
    }, 2000);

    return () => clearInterval(phaseInterval);
  }, []);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setIsScanning(prev => !prev);
    }, 1500);

    return () => clearInterval(statusInterval);
  }, []);

  return (
    <div className="relative flex justify-center items-center mb-12">
      <div className="relative w-58 h-48 lg:w-64 lg:h-64">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-48 h-48 lg:w-32 lg:h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl lg:text-[9.9rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse">
                ॐ
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-sm animate-spin-slow"></div>
          </div>
        </div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#f59e0b', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="100"
            fill="none"
            stroke="url(#energyGradient)"
            strokeWidth="2"
            strokeDasharray="251.2, 251.2"
            strokeDashoffset={251.2 - (verticalScan * 2.512)}
            className="animate-spin-slow"
          />
        </svg>
      </div>
    </div>
  );
};

export default DualAxisOMScanner;
