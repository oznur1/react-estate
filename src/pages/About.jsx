import React from 'react';
import { assets } from '../assets/assets';
import Button from '../components/button';

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col items-center justify-center w-full p-14 md:px-20 lg:px-32 overflow-hidden"
    >
      {/* Başlık */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        About <span className="underline underline-offset-4 decoration-2">Our Brand</span>
      </h1>
      <p className="text-center mb-10 text-gray-600">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      {/* Görsel ve istatistikler */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full">
        {/* Görsel */}
        <img
          src={assets.brand_img}
          alt="Brand"
          className="w-full sm:w-1/2 max-w-lg rounded-lg shadow-lg"
        />

        {/* İstatistikler */}
        <div className="flex flex-col gap-8 md:gap-10 w-full ml-20 mt-10">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full">
            <div className="text-center md:text-left">
              <p className="text-4xl font-semibold text-gray-800">10+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>

            <div className="text-center md:text-left">
              <p className="text-4xl font-semibold text-gray-800">12+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>

            <div className="text-center md:text-left">
              <p className="text-4xl font-semibold text-gray-800">20+</p>
              <p className="text-gray-600">Min Sq Ft Delivered</p>
            </div>

            <div className="text-center md:text-left">
              <p className="text-4xl font-semibold text-gray-800">25+</p>
              <p className="text-gray-600">Ongoing Projects</p>
            </div>
          </div>
            <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic labore inventore totam officiis voluptates velit aliquid architecto, nobis harum, repudiandae pariatur illum officia odio fugit impedit tempora ut sed.</p>
          {/* Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <Button label="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
