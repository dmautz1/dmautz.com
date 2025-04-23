import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  level: number; // 1-5
  color?: string;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  skill, 
  level, 
  color = 'bg-blue-500', 
  className = '' 
}) => {
  // Generate dots based on skill level
  const dots = Array.from({ length: 5 }, (_, i) => (
    <div 
      key={i} 
      className={`h-1.5 w-1.5 rounded-full mr-0.5 ${
        i < level ? color : 'bg-gray-300 dark:bg-gray-600'
      }`}
    />
  ));

  return (
    <motion.div 
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium 
                 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                 shadow-sm ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <span className="mr-2">{skill}</span>
      <div className="flex">{dots}</div>
    </motion.div>
  );
};

export default SkillBadge;