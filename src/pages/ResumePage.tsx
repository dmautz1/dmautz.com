import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

const ResumePage: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Mautz_Resume.docx';
    link.download = 'Mautz_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOnline = () => {
    window.open('/assets/Mautz_Resume.docx', '_blank');
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
                Complete professional resume including experience in software development, 
                data engineering, and full-stack development with expertise in Python, 
                TypeScript, React, and modern cloud technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
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
                <li>• Full-Stack Development (React, TypeScript, Python)</li>
                <li>• Data Engineering (PySpark, ETL Pipelines, AWS)</li>
                <li>• AI/ML Integration (OpenAI, Google AI, Anthropic)</li>
                <li>• Cloud Technologies (AWS, Supabase, Vercel)</li>
                <li>• Database Design (PostgreSQL, MongoDB, SQL Server)</li>
                <li>• DevOps & CI/CD (Docker, GitHub Actions)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Experience Highlights</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Built production-ready AI agent platform</li>
                <li>• Developed ETL pipelines processing millions of records</li>
                <li>• Created full-stack web applications</li>
                <li>• Published books and managed business operations</li>
                <li>• Automated identity management systems</li>
                <li>• Implemented comprehensive testing strategies</li>
              </ul>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
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