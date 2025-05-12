import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Weather App",
    description: "React + OpenWeather API based weather UI.",
  },
  {
    title: "Amazon Clone",
    description: "Homepage replica using pure HTML & CSS & JS",
  },
  {
    title: "Fanta Landing",
    description: "Fanta-styled animated landing page using gsap",
  },
  {
    title: "Netflix Clone",
    description: "Homepage replica using pure HTML & CSS.",
  },
  {
    title: "Portfolio",
    description: "Personal website using React + TailwindCSS.",
  },
  {
    title: "VastraXverse",
    description: "Full-stack fashion brand website using React, TailwindCSS, and Cloudinary",
  },
  {
    title: "Ghiblimatic",
    description: "A Studio Ghibli image library built with React and TailwindCSS",
  },
  {
    title: "OceanSwift Logistics",
    description: "Professional logistics website built with WordPress and Astra.",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white flex flex-col items-center justify-center overflow-hidden font-comic px-4 py-12 sm:px-6">
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold bangers text-center mb-10 text-red-500 drop-shadow-[4px_4px_0_#000] tracking-widest"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl">
        {/* Carousel Arrows */}
        <div className="swiper-button-prev !text-white !text-xl !left-[-1rem] sm:!left-[-2rem] z-10 drop-shadow-[2px_2px_0_#000]" />
        <div className="swiper-button-next !text-white !text-xl !right-[-1rem] sm:!right-[-2rem] z-10 drop-shadow-[2px_2px_0_#000]" />

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          loop
          breakpoints={{
            480: { slidesPerView: 1.1 }, // allow slide to peek on tiny phones
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
           <SwiperSlide key={index}>
           <motion.div
             className="mx-auto bg-yellow-100 text-gray-900 w-full max-w-[320px] aspect-[4/3] rounded-[1rem] shadow-[8px_8px_0px_#000] p-5 border-[6px] border-black comic-card hover:scale-[1.05] transition-transform duration-200 flex flex-col justify-between relative overflow-hidden"
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3, delay: index * 0.1 }}
           >
                <h3 className="text-xl sm:text-2xl bangers text-black mb-3 tracking-widest leading-tight uppercase bg-red-400 px-3 py-1 rounded shadow-[3px_3px_0_#000] inline-block">
                  {project.title}
                </h3>

                <p className="font-comic text-[14px] sm:text-[15px] leading-snug text-black drop-shadow-[1px_1px_0_#000]">
                  {project.description}
                </p>

                <div className="mt-4 text-right">
                  <button className="bg-black text-yellow-300 font-bold px-4 py-2 rounded-full shadow-[3px_3px_0_#000] hover:shadow-[0px_0px_0_#000] hover:bg-yellow-400 hover:text-black transition-all duration-200 bangers uppercase text-xs sm:text-sm">
                    View →
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
