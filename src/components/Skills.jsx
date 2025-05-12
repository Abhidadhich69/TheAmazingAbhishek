import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit,
  SiPostman, SiShadcnui, SiMui, SiExpress, SiMongodb, SiNodedotjs, SiGithub,
  SiCloudinary, SiWordpress
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <SiHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <SiCss3 className="text-blue-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
  { name: 'React.js', icon: <SiReact className="text-cyan-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Git', icon: <SiGit className="text-orange-500" /> },
  { name: 'GitHub', icon: <SiGithub className="text-black" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  { name: 'shadcn/ui', icon: <SiShadcnui className="text-black" /> },
  { name: 'Material UI', icon: <SiMui className="text-blue-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Cloudinary', icon: <SiCloudinary className="text-blue-600" /> },
  { name: 'WordPress', icon: <SiWordpress className="text-blue-400" /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen w-full py-16 px-2 sm:px-4 flex items-center justify-center flex-col bg-yellow-100 text-center text-gray-800 font-comic"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl sm:text-5xl bangers mb-10 text-red-600 drop-shadow-[3px_3px_0_#000] tracking-wider">
        My Superpowers 💥
      </h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white border-[4px] border-black rounded-xl px-4 py-3 shadow-[4px_4px_0_#000] w-[140px] sm:w-[160px] md:w-[180px] flex items-center justify-center gap-2 sm:gap-3 hover:scale-[1.05] transition-transform duration-200"
            whileHover={{ y: -4 }}
          >
            <div className="text-xl sm:text-2xl">{skill.icon}</div>
            <span className="text-sm sm:text-base font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
