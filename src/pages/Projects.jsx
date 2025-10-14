import React, { useRef } from 'react';
import { projectsData } from '../assets/assets';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section
      id="Projects"
      className="flex flex-col items-center justify-center w-full p-14 md:px-20 lg:px-32 overflow-hidden bg-gray-50"
    >
      {/* Başlık */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        Completed <span className="underline underline-offset-4 decoration-2">Projects</span>
      </h1>
      <p className="text-center mb-10 text-gray-600">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Kaydırılabilir proje alanı */}
      <div className="relative w-full">
        {/* Sol ok */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 z-10"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Yatay kaydırma alanı */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scroll-smooth px-10 no-scrollbar"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 flex-shrink-0"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-500">{project.location}</p>
                <p className="text-blue-600 font-bold mt-2">{project.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sağ ok */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 z-10"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
