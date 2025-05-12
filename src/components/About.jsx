import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative flex items-center justify-center h-screen w-screen text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Full Spider Web Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <svg
          className="w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Full Web Pattern */}
          {/* Outer Spider Web Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e63946"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="#e63946"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="#e63946"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="15"
            stroke="#e63946"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="5"
            stroke="#e63946"
            strokeWidth="1"
            fill="none"
          />

          {/* Spider Web Spokes (Lines coming from the center) */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="0"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="100"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="0"
            y2="50"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="100"
            y2="50"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="20"
            y2="20"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="80"
            y2="20"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="20"
            y2="80"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="80"
            y2="80"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="0"
            y2="20"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="100"
            y2="20"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="0"
            y2="80"
            stroke="#e63946"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="100"
            y2="80"
            stroke="#e63946"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="text-center max-w-3xl mx-auto p-6 relative z-10">
        {/* About Me Title Animation */}
        <motion.h2
          className="text-6xl font-bold bangers text-red-500 mb-4 drop-shadow-[4px_4px_0_#000] tracking-wider"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* About Me Description Animation */}
        <motion.p
          className="text-xl leading-relaxed font-comic drop-shadow-[3px_3px_0_#000]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I’m a web-slinging developer with a knack for creating stunning,
          responsive websites—no web-shooter needed! 🕷️💻 Armed with a strong
          foundation in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I
          weave together sleek UIs that work across all devices. 💥 
          <br />
          I’ve swung through my BCA and built several projects that showcase my superpowers
          in web design and development. Ready to leave my mark on the digital
          world, one pixel at a time! 🚀🕸️
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
