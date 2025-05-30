import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <i className="bi bi-github mr-2"></i> Código
          </a>
          <a 
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <i className="bi bi-box-arrow-up-right mr-2"></i> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;