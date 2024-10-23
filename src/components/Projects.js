import React from 'react';
import bloomsImage from '../assets/blooms.jpg';
import libraryImage from '../assets/library.jpg';
import drugImage from '../assets/drug.png';

const Projects = () => {
  const projects = [
    {
      title: "Blooms Taxonomy",
      description: "An interactive tool for analyzing questions based on Bloom's Taxonomy levels.",
      image: bloomsImage, // Imported image
    },
    {
      title: "RPMS",
      description: "A robust Resource Planning Management System designed for efficiency.",
      image: libraryImage, // Imported image
    },
    {
      title: "Drug Interaction Prediction",
      description: "A predictive model to analyze potential drug interactions using machine learning.",
      image: drugImage, // Imported image
    },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-900">
      <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
