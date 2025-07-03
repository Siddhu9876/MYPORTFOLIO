import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="card group overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 
      }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark-500/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary-600 rounded-full hover:bg-primary-700 transition-colors"
                aria-label={`View ${project.title} demo`}
              >
                <ExternalLink size={20} className="text-white" />
              </a>
            )}
            
            {project.sourceLink && (
              <a 
                href={project.sourceLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-dark-300 rounded-full hover:bg-dark-200 transition-colors"
                aria-label={`View ${project.title} source code`}
              >
                <Github size={20} className="text-white" />
              </a>
            )}
          </div>
        </div>
        
        {project.featured && (
          <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Featured
          </div>
        )}
      </div>
      
      <h3 className="heading-sm mb-2 group-hover:text-neon-cyan transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-400 mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs font-medium px-3 py-1 rounded-full bg-dark-400 text-primary-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;