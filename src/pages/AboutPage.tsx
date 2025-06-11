import React from 'react';
import { Link } from 'react-router-dom';
import { Github as GitHub, Linkedin, Twitter, ChevronRight, File } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import skills from '../data/skills';
import SkillBadge from '../components/SkillBadge';
import meImage from '../assets/me.jpg';

const AboutPage: React.FC = () => {
  const { ref: bioRef, inView: bioInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryTitles: Record<string, string> = {
    ai: 'AI & Machine Learning',
    etl: 'ETL & Data Engineering',
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database Technologies',
    cloud: 'Cloud & DevOps',
    other: 'Other Skills'
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <motion.div 
            className="mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Senior Developer specializing in AI agent platforms, ETL pipelines, enterprise applications, and production-ready systems with extensive government and enterprise experience.
            </p>
          </motion.div>
        </div>

        {/* Bio Section */}
        <motion.section 
          ref={bioRef}
          className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: bioInView ? 1 : 0, y: bioInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:col-span-1">
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src={meImage} 
                alt="David Mautz" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/dmautz1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  <GitHub className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/dmautz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://x.com/dmautz" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
              <div className="mt-6">
                <a 
                  href="/resume" 
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <File className="h-4 w-4 mr-2" />
                  View Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Background</h2>
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p className="mt-6 text-gray-600 dark:text-gray-300">
                I'm a Senior Developer at the U.S. Treasury - Office of Financial Research with over a decade of experience in government and enterprise environments. My expertise spans AI agent development, ETL pipeline architecture, enterprise application development, and cloud infrastructure management.
              </p>
              <p className="mt-6 text-gray-600 dark:text-gray-300">
                Recently, I've built a production-ready AI Agent Platform supporting multiple AI providers (OpenAI, Google AI, Anthropic, Grok, DeepSeek, Meta Llama) with zero-config agent discovery, type-safe development, and 100% test coverage. This platform demonstrates my ability to architect scalable, production-ready systems with comprehensive testing and modern development practices.
              </p>
              <p className="mt-6 text-gray-600 dark:text-gray-300">
                At the Office of Financial Research, I've designed and implemented ETL pipelines for 25+ financial datasets using PySpark, Python, Ruby, EMR, Hive, Trino, S3, and Parquet. I've automated data workflows through Rundeck and developed the OFR Data Catalog using Ruby on Rails, Bootstrap, jQuery, Blacklight, and Solr.
              </p>
              <p className="mt-6 text-gray-600 dark:text-gray-300">
                I've also led the development of enterprise applications including managing full-stack environments with Nginx, Postgres, and RedHat Linux servers. I'm a certified scrum master, leading Agile Scrum development teams, collaborating with analysts and testers to define requirements in JIRA.
              </p>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Why Work With Me</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <ChevronRight className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-2">I build production-ready systems with comprehensive testing and modern development practices</span>
                </li>
                <li className="flex">
                  <ChevronRight className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-2">I bring extensive experience in AI integration and multi-provider architectures</span>
                </li>
                <li className="flex">
                  <ChevronRight className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-2">I combine technical expertise with strong project management skills</span>
                </li>
                <li className="flex">
                  <ChevronRight className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-2">I relentlessly pursue solutions until the problem is solved</span>
                </li>
                <li className="flex">
                  <ChevronRight className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-2">I prioritize type-safe development, documentation, and sustainable solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          ref={skillsRef}
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {categoryTitles[category]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      color={
                        skill.level === 5 ? 'bg-green-500' :
                        skill.level === 4 ? 'bg-blue-500' :
                        'bg-yellow-500'
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section 
          ref={experienceRef}
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h2>
          
          <div className="space-y-12">
            <div className="relative pl-8 pb-2 border-l-2 border-blue-200 dark:border-blue-800">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
              <div className="mb-1 flex items-center justify-between flex-wrap">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Senior Developer</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">April 2013 - Present</span>
              </div>
              <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">U.S. Treasury - Office of Financial Research</h4>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="ml-2">Developed ETL pipelines for 25+ financial datasets using PySpark, Python, Ruby, EMR, Hive, Trino, S3, and Parquet</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="ml-2">Built the OFR Data Catalog using Ruby on Rails, Bootstrap, jQuery, Blacklight, and Solr</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="ml-2">Designed and deployed PIV data synchronization system for Active Directory, Exchange, and Teams</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="ml-2">Led Agile Scrum development and managed full-stack environments</span>
                </li>
              </ul>
            </div>

            <div className="relative pl-8 pb-2 border-l-2 border-blue-200 dark:border-blue-800">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
              <div className="mb-1 flex items-center justify-between flex-wrap">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">IT Specialist</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">September 2010 - April 2013</span>
              </div>
              <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">U.S. Treasury - Office of the CIO</h4>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="ml-2">Administered SharePoint 2010 across 16 offices</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="ml-2">Managed BMC Remedy ticketing, incident, asset, and change management systems</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="ml-2">Developed PIV data synchronization using IBM Tivoli Identity Manager</span>
                </li>
              </ul>
            </div>

            <div className="relative pl-8 pb-2 border-l-2 border-blue-200 dark:border-blue-800">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
              <div className="mb-1 flex items-center justify-between flex-wrap">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Lead Developer</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">September 2009 - September 2010</span>
              </div>
              <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">ACS Creative</h4>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="ml-2">Led WordPress administration and custom theme development</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="ml-2">Managed 50+ client websites on Rackspace Cloud</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="ml-2">Implemented DevOps best practices and standardized version control</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">MBA, Finance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">Louisiana State University</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">May 2009</p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Specialized in financial analysis and business strategy
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">B.S., General Studies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">Louisiana State University</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">December 2006</p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Concentrations in Business, Economics, and Communication Studies
              </p>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Certified Scrum Master</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2016</p>
            </div>
          </div>
        </section>

        {/* Entrepreneurship Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Entrepreneurship</h2>
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              I'm a proud entrepreneur with a passion for building and scaling businesses.
            </p>
            <div className="mt-8 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Regular</h3>
                <a 
                  href="https://stayregular.io" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  stayregular.io
                </a>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A freemium app that helps you build good habits through recurring tasks and subscribing to popular programs.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Rock Paper Books</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">(Closed in 2017)</p>
                <a 
                  href="https://instagram.com/rockpaperbooks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  instagram.com/rockpaperbooks
                </a>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A book publishing company that specialized in creating high-quality, beautifully designed classic books. Sold 50,000+ books.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interested in working together?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm currently open to new full-time jobs and opportunities and would love to discuss how I can help with your data challenges or project needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;