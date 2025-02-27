import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import myImage from "../../assets/my.jpg";
import resume from '../../assets/resume.pdf';

const skillsData = [
  { name: "React.js", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "Tailwind", level: 85 },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-lg -rotate-6"></div>
          <img
            src={myImage}
            alt="Profile"
            className="relative w-full h-full object-cover rounded-lg shadow-lg border-4 border-white"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Who <span className="text-blue-500">Am I?</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Passionate Frontend Developer with experience in React, JavaScript, and modern UI/UX practices.
            I love building smooth, interactive, and responsive web applications.
          </p>

<div className="w-full sm:w-72 md:w-full h-32 md:h-48 bg-white shadow-md p-4 rounded-lg">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={skillsData} layout="vertical">
      <XAxis type="number" domain={[0, 100]} hide />
      
      <YAxis 
        dataKey="name" 
        type="category" 
        width={110} 
        tick={{ fontSize: 14 }}  
      />
      
      <Tooltip />

      <Bar 
        dataKey="level" 
        fill="#4F46E5" 
        barSize={16}  
      />
    </BarChart>
  </ResponsiveContainer>
</div>


          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={resume}
              download="Javohir_CV.pdf"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 text-gray-900 rounded-lg hover:bg-gray-200 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
