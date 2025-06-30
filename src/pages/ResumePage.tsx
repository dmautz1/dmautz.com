import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

const ResumePage: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/mautz_resume.pdf';
    link.download = 'David_Mautz_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOnline = () => {
    window.open('/assets/mautz_resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Resume
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Download or view my complete professional resume with detailed experience, skills, and achievements.
            </motion.p>
          </div>

          {/* Resume Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">David Mautz - Resume</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Senior Data Engineer with 15 years of experience specializing in AI-driven solutions, 
                data engineering, and blockchain technologies. Expertise in scalable ETL pipelines, 
                AI agent platforms, and automated workflows using Python, PySpark, FastAPI, and AWS.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </button>
                <button
                  onClick={handleViewOnline}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Online
                </button>
              </div>
            </div>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Key Skills</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• AI & Machine Learning (LLMs, NLP, AI Agents)</li>
                <li>• Data Engineering (PySpark, Hive, Trino, Parquet)</li>
                <li>• Programming (Python, Ruby, JavaScript, TypeScript)</li>
                <li>• Cloud & DevOps (AWS, Rundeck, Apache, Nginx)</li>
                <li>• Modern Frameworks (React, FastAPI, Node.js)</li>
                <li>• Blockchain (Solidity, Smart Contracts, NFTs)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Experience Highlights</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Built AI agent platform with multi-provider support</li>
                <li>• Engineered ETL pipelines for 25+ terabyte-scale datasets</li>
                <li>• Designed data collection systems for 40 financial institutions</li>
                <li>• Developed automated entity resolution systems</li>
                <li>• Created full-stack applications with modern technologies</li>
                <li>• Led Agile Scrum teams and project management</li>
              </ul>
            </div>
          </motion.div>

          {/* Recent Projects */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h3 className="text-xl font-semibold mb-4">Recent Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">AI Agent Platform (2025)</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Scalable framework for AI agents with multi-provider support using Python, FastAPI, and LLMs
                </p>
                <a 
                  href="https://github.com/dmautz1/ai-agent-platform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  View on GitHub →
                </a>
              </div>
              <div>
                <h4 className="font-medium mb-2">Regular App (2024)</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Task-tracking app with subscription programs using React, Node.js, and Supabase
                </p>
                <a 
                  href="https://stayregular.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  Visit stayregular.io →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-gray-600 dark:text-gray-300">
              For questions about my experience or to discuss opportunities, 
              please feel free to <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact me</a>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage; 