import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-[#e63946] border-b-[5px] border-black z-50 shadow-[0_4px_0_0_#000]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold bangers text-white drop-shadow-[2px_2px_0_#000] tracking-widest">
          Abhishek
        </h1>

        {/* Nav Links */}
        <div className="space-x-6 flex items-center">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
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
    </motion.nav>
  );
};

export default Navbar;
