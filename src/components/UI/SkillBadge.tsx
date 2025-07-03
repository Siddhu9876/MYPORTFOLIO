import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  return (
    <motion.div
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-300 hover:bg-dark-200 transition-colors"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.05 
      }}
      whileHover={{ y: -4 }}
    >
      <span className="text-xl">{skill.icon}</span>
      <span className="text-sm font-medium">{skill.name}</span>
    </motion.div>
  );
};

export default SkillBadge;