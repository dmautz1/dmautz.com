import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const PortfolioPage: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  // Filter projects based on selected tags
  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project =>
          selectedTags.some(tag => project.tags.includes(tag))
        )
      );
    }
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getTagColor = (tag: string, isSelected: boolean) => {
    const baseColors: Record<string, string> = {
      ETL: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      Node: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      React: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
      SQL: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      Python: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      Crypto: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      AI: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      Kafka: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      Snowflake: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      AWS: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
    };
    
    const selectedColors: Record<string, string> = {
      ETL: 'bg-blue-600 text-white dark:bg-blue-500',
      Node: 'bg-green-600 text-white dark:bg-green-500',
      React: 'bg-cyan-600 text-white dark:bg-cyan-500',
      SQL: 'bg-yellow-600 text-white dark:bg-yellow-500',
      Python: 'bg-purple-600 text-white dark:bg-purple-500',
      Crypto: 'bg-orange-600 text-white dark:bg-orange-500',
      AI: 'bg-pink-600 text-white dark:bg-pink-500',
      Kafka: 'bg-red-600 text-white dark:bg-red-500',
      Snowflake: 'bg-indigo-600 text-white dark:bg-indigo-500',
      AWS: 'bg-amber-600 text-white dark:bg-amber-500',
      default: 'bg-gray-600 text-white dark:bg-gray-500'
    };
    
    return isSelected ? (selectedColors[tag] || selectedColors.default) : (baseColors[tag] || baseColors.default);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Portfolio
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A showcase of my projects in ETL development, data engineering, Node.js applications, and React interfaces.
          </motion.p>
        </div>

        {/* Filter Tags */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Filter by Technology</h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  getTagColor(tag, selectedTags.includes(tag))
                }`}
              >
                {tag}
              </button>
            ))}
            
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">No projects match your selected filters</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Try selecting different filters or clear your current selection</p>
              <button
                onClick={() => setSelectedTags([])}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Interested in working together?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            If you like my work and have a project in mind, I'd love to hear from you. 
            Let's discuss how I can help bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;