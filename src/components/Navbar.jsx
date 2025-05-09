import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // hamburger and close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["home", "about", "projects", "skills", "contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-[#e63946] border-b-[5px] border-black z-50 shadow-[0_4px_0_0_#000]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl sm:text-4xl font-bold bangers text-white drop-shadow-[2px_2px_0_#000] tracking-widest">
          Abhishek
        </h1>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative uppercase text-white font-bold transition duration-300 hover:text-yellow-300 comic-neue"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-[#e63946] border-t border-black px-6 py-4"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="uppercase text-white font-bold text-xl hover:text-yellow-300 comic-neue"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
