import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github as GitHub, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm interested in ETL projects, data engineering opportunities, and enterprise application development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-gray-900 dark:text-white font-medium">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">New Orleans, LA</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Available for remote work</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-gray-900 dark:text-white font-medium">Email</p>
                    <a 
                      href="mailto:dmautz@gmail.com" 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      dmautz@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect</h2>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/dmautz1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/dmautz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://twitter.com/dmautz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Availability</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-900 dark:text-white font-medium">Current Status</p>
                <p className="text-green-600 dark:text-green-400 font-medium">Open to New Full-Time Jobs</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  I'm currently available for ETL development, data engineering projects, and enterprise application development.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 md:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;