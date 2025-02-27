import React from "react";
import project4 from "../../assets/project4.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const projects = [
  {
    id: 1,
    image: project4,
    title: "Portfolio Website",
    tech: "JavaScript, Css, HTML",
    link: "https://light-dark-animation.vercel.app",
  },
  {
    id: 2,
    image: project2,
    title: "Study Website",
    tech: "HTML, Tailwind, JavaScript",
    link: "https://studywebsite.vercel.app",
  },
  {
    id: 3,
    image: project3,
    title: "Dropping effect",
    tech: "JavaScript, CSS",
    link: "https://droppingeffect.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-100">
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.tech}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
