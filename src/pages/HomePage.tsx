import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, File, Cpu, Database, Code, BarChart } from 'lucide-react';
import SkillBadge from '../components/SkillBadge';
import skills from '../data/skills';
import { useInView } from 'react-intersection-observer';
import meImage from '../assets/me.jpg';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills.filter(skill => skill.level == 5).slice(0, 9);

  const filterButtons = [
    { id: null, label: 'Top Skills', icon: null },
    { id: 'etl', label: 'ETL', icon: <Database className="h-4 w-4 mr-1" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="h-4 w-4 mr-1" /> },
    { id: 'backend', label: 'Backend', icon: <Cpu className="h-4 w-4 mr-1" /> },
    { id: 'database', label: 'Database', icon: <Database className="h-4 w-4 mr-1" /> },
    { id: 'cloud', label: 'Cloud', icon: <BarChart className="h-4 w-4 mr-1" /> },
    { id: 'other', label: 'Other', icon: <BarChart className="h-4 w-4 mr-1" /> },
  ];

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 md:pr-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="text-blue-600 dark:text-blue-400">Senior Data Engineer</span> & AI Solutions Expert
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                Hi, I'm David Mautz, a Senior Data Engineer at the U.S. Treasury - Office of Financial Research with 15 years of experience specializing in AI-driven solutions, data engineering, and blockchain technologies. I build scalable ETL pipelines, AI agent platforms, and automated workflows using Python, PySpark, FastAPI, and AWS.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  View Resume
                  <File className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 rounded-full bg-blue-200 dark:bg-blue-900/30 filter blur-3xl opacity-70 transform -rotate-6"></div>
                <img 
                  src={meImage} 
                  alt="David Mautz" 
                  className="relative z-10 w-full h-auto rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        ref={skillsRef}
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Skills</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I specialize in AI-driven solutions, terabyte-scale ETL pipelines, data engineering, and automated workflows with expertise in Python, PySpark, FastAPI, and AWS.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterButtons.map((button) => (
              <button
                key={button.id?.toString() || 'top'}
                onClick={() => setSelectedCategory(button.id)}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === button.id
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {button.icon}
                {button.label}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filteredSkills.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill.name}
                level={skill.level}
                color={
                  skill.level == 5 ? 'bg-green-500' : 
                  skill.level == 4 ? 'bg-blue-500' : 
                  'bg-yellow-500'
                }
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Areas of Expertise</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              With 15 years of experience at the U.S. Treasury specializing in AI-driven solutions and data engineering, I bring proven expertise in building scalable, production-ready systems for financial institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Data Engineering & ETL</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I've engineered ETL pipelines for 25+ terabyte-scale datasets using PySpark, Python, Ruby, and AWS (EMR, S3, Lambda). I've designed end-to-end data collection systems for 40 financial institutions and developed automated entity resolution systems for streamlining data processing workflows.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI & Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I've built a scalable AI Agent Platform with multi-provider support (OpenAI, Google AI, Anthropic, Grok, DeepSeek, Meta Llama) using Python, FastAPI, and LLMs. I specialize in prompt engineering, machine learning pipelines, and AI-driven automation solutions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Enterprise Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Proven track record developing enterprise applications using Ruby on Rails, managing full-stack environments with Nginx, Apache, PostgreSQL, and AWS EC2. As a Certified Scrum Master since 2016, I've led Agile teams and collaborated with analysts to deliver high-quality solutions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Blockchain & Smart Contracts</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Since 2019, I've been actively engaged in blockchain technologies, smart contracts, and NFTs with hands-on experience in Solidity. I stay current with crypto technologies and explore opportunities to integrate blockchain solutions into traditional enterprise systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.section 
        ref={ctaRef}
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to work together?</span>
                  <span className="block text-blue-200">Let's discuss your project.</span>
                </h2>
                <p className="mt-4 text-lg text-blue-100 max-w-2xl">
                  Whether you need help with data pipelines, enterprise applications, or cloud infrastructure, I can help bring your vision to life.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;