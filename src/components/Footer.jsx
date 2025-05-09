import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="py-6 text-center bg-blue-900 text-yellow-500 font-comic border-t border-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="text-2xl font-bold bangers drop-shadow-[4px_4px_0_#000] tracking-widest"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        © 2025 Abhishek Sharma. All rights reserved.
      </motion.p>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
    
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
