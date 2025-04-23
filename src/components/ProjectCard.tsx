import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  achievements: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      ETL: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      Node: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      React: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
      SQL: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      Python: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      Crypto: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      AI: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      Kafka: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      Snowflake: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      AWS: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
    };
    
    return colors[tag] || colors.default;
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Achievements:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {project.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="View source code on GitHub"
            >
              <div className="flex items-center">
                <GitHub className="h-4 w-4 mr-1" />
                <span className="text-sm">Code</span>
              </div>
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="View live demo"
            >
              <div className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-1" />
                <span className="text-sm">Live Demo</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;