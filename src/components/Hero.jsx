import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white flex items-center justify-center overflow-hidden font-comic">
      {/* Dotted Comic Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Radial Burst Background (Comic Style) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[150%] h-[150%] bg-radial-burst opacity-20 mix-blend-screen"></div>
      </div>

      {/* Hero Box with Comic Style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 bg-[#e63946] text-white border-[6px] border-black rounded-[20px] shadow-[8px_8px_0_0_#000] px-10 py-12 text-center max-w-2xl"
      >
        <h1 className="text-6xl font-bold bangers text-white drop-shadow-[3px_3px_0_#000] mb-4">
          Hi, I'm Abhishek
        </h1>
        <p className="text-xl text-white comic-neue drop-shadow-[2px_2px_0_#000]">
          Your Friendly Neighborhood Web Developer 🕸️
        </p>
        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-[#457b9d] text-white font-bold border-[3px] border-black rounded-full shadow-[4px_4px_0_#000] hover:scale-105 transition-transform"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
