import React from 'react';
import { motion } from 'framer-motion';

interface LogoMarqueeProps {
  logos: string[];
  speed?: number;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos, speed = 30 }) => {
  // Triple the logos to ensure a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-10 opacity-60 hover:opacity-100 transition-opacity duration-500">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16"
          >
            <img
              src={logo}
              alt="Client Logo"
              className="h-6 md:h-10 lg:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 contrast-125"
            />
          </div>
        ))}
      </div>
      
      {/* Gradient Overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export default LogoMarquee;
