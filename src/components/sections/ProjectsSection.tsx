import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../../types';
import SectionHeading from '../UI/SectionHeading';
import ProjectCard from '../UI/ProjectCard';
import projects from '../../data/projects';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();
  
  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;
  
  return (
    <section 
      id={SectionId.Projects}
      className="section-padding bg-dark-400 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-primary-800/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills and expertise."
        />
        
        {/* Filter Controls */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null
                ? 'bg-primary-600 text-white'
                : 'bg-dark-300 text-gray-300 hover:bg-dark-200'
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-300 text-gray-300 hover:bg-dark-200'
              }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400">No projects match the selected filter.</p>
          </motion.div>
        )}
        
        {/* GitHub link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 mb-4">
            View more projects on my GitHub profile.
          </p>
          <a 
            href="https://github.com/siddhu9876" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Visit GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;