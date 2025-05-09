import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="h-screen px-4 bg-red-800 text-white font-comic flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-6xl font-bold bangers text-yellow-500 mb-8 drop-shadow-[6px_6px_0_#000]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="mb-8 text-lg font-medium drop-shadow-[2px_2px_0_#000]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          I do freelancing! Reach out for collaborations, projects, or just a
          friendly hello 👋
        </motion.p>

        <motion.div
          className="flex justify-center gap-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://github.com/Abhidadhich69"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-5xl hover:text-yellow-500 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-sharma-261435251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-5xl hover:text-yellow-500 transition" />
          </a>
          <a
            href="https://instagram.com/abhi_dadhich_69"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-5xl hover:text-yellow-500 transition" />
          </a>
          <a
            href="https://wa.me/6378834594"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-5xl hover:text-yellow-500 transition" />
          </a>
        </motion.div>
        <a
          href="mailto:sharmaabhi72005@gmail.com"
          className="inline-block px-8 py-4 bg-yellow-600 text-white rounded-full font-semibold text-2xl tracking-widest drop-shadow-[3px_3px_0_#000] hover:bg-yellow-700 hover:scale-105 transition-transform duration-300"
        >
          <span className="font-comic text-xl drop-shadow-[2px_2px_0_#000]">
            Say Hello
          </span>
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
