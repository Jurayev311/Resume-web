import React from 'react';
import image from "../../assets/my.jpg";

const Hero = () => {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-[150px] translate-y-[-50px]">
      <div className="container max-w-[1308px] mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Hi, I'm <span className="text-blue-500">Javohir</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            A passionate Frontend Developer crafting beautiful and functional web experiences.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium shadow-md hover:bg-blue-700 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 text-gray-700 rounded-lg text-lg font-medium shadow-md hover:bg-gray-200 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Profile"
            className="w-56 sm:w-64 md:w-80 lg:w-96 rounded-full shadow-xl border-4 border-gray-300 object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
