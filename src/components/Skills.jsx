import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit,
  SiPostman, SiShadcnui, SiMui, SiExpress, SiMongodb, SiNodedotjs, SiGithub
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
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-4 bg-yellow-100 h-screen w-screen text-center text-gray-800 font-comic"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl bangers mb-10 text-red-600 drop-shadow-[3px_3px_0_#000] tracking-wider">
        My Superpowers 💥
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white border-[4px] border-black rounded-xl px-5 py-3 shadow-[4px_4px_0_#000] flex items-center gap-3 hover:scale-[1.05] transition-transform duration-200"
            whileHover={{ y: -4 }}
          >
            <div className="text-2xl">{skill.icon}</div>
            <span className="text-lg font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
