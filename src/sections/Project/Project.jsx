import React from 'react';
import { projects } from './projectsData';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <section id="project" className="pt-28 pb-20 mt-20 py-20 bg-gray-900 opacity-90 dark:bg-gray-900 dark:opacity-90 ">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold text-center mb-4 text-lime-100">
          Mis Proyectos
        </h2>
        <p className="text-3xl text-center text-gray-200 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Algunos de mis trabajos recientes y proyectos personales
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;