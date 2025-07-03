import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../../types';
import SectionHeading from '../UI/SectionHeading';
import SkillBadge from '../UI/SkillBadge';
import skills from '../../data/skills';

const SkillsSection: React.FC = () => {
  // Group skills by category
  const skillsByCategory = {
    language: skills.filter(skill => skill.category === 'language'),
    framework: skills.filter(skill => skill.category === 'framework'),
    tool: skills.filter(skill => skill.category === 'tool'),
    other: skills.filter(skill => skill.category === 'other')
  };
  
  return (
    <section 
      id={SectionId.Skills}
      className="section-padding relative"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500 blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-neon-cyan blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Skills & Expertise"
          subtitle="A showcase of my technical skills and areas of expertise."
        />
        
        <div className="space-y-12">
          {/* Languages */}
          <div>
            <motion.h3 
              className="heading-sm mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Programming <span className="text-neon-cyan">Languages</span>
            </motion.h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {skillsByCategory.language.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          {/* Frameworks */}
          <div>
            <motion.h3 
              className="heading-sm mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frameworks & <span className="text-neon-cyan">Libraries</span>
            </motion.h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {skillsByCategory.framework.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div>
            <motion.h3 
              className="heading-sm mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Tools & <span className="text-neon-cyan">Technologies</span>
            </motion.h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {skillsByCategory.tool.concat(skillsByCategory.other).map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;