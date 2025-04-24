import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'submitting', message: 'Sending message...' });
    
    // This would normally connect to a backend service
    // For demo purposes, we'll simulate a successful submission after a delay
    setTimeout(() => {
      // Simulate form submission response
      if (Math.random() > 0.1) { // 90% success rate for demo
        setFormStatus({
          status: 'success',
          message: 'Your message has been sent successfully! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({
          status: 'error',
          message: 'There was an error sending your message. Please try again later.',
        });
      }
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm 
                   placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                   dark:bg-gray-800 dark:text-white sm:text-sm"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm 
                   placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                   dark:bg-gray-800 dark:text-white sm:text-sm"
          placeholder="youremail@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm 
                   placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                   dark:bg-gray-800 dark:text-white sm:text-sm"
          placeholder="Job Opportunity"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm 
                   placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                   dark:bg-gray-800 dark:text-white sm:text-sm"
          placeholder="I'd like to discuss a potential opportunity..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={formStatus.status === 'submitting'}
          className={`inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                    ${formStatus.status === 'submitting' 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    } transition-colors w-full sm:w-auto`}
        >
          {formStatus.status === 'submitting' ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </span>
          )}
        </button>
      </div>

      {formStatus.status !== 'idle' && formStatus.status !== 'submitting' && (
        <div
          className={`p-4 rounded-md ${
            formStatus.status === 'success' 
              ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
              : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300'
          }`}
        >
          {formStatus.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;