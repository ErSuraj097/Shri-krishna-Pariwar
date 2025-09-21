import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        setCurrentIndex(index + 1);
      } else {
        clearInterval(timer);
      }
      index++;
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse ml-1 text-purple-500">|</span>
    </span>
  );
};

export default TypingAnimation;
