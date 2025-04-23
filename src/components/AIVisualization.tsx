import React from 'react';
import { BarChart, Activity } from 'lucide-react';

const AIVisualization: React.FC = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <BarChart className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
        <h3 className="text-lg font-medium">AI Model Performance</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Neural Network</span>
            <span className="text-sm font-medium">92%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Random Forest</span>
            <span className="text-sm font-medium">87%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-green-600 dark:bg-green-500 h-2.5 rounded-full" style={{ width: '87%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">SVM</span>
            <span className="text-sm font-medium">78%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-yellow-500 dark:bg-yellow-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Logistic Regression</span>
            <span className="text-sm font-medium">65%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-red-500 dark:bg-red-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
          <Activity className="h-3 w-3 mr-1" />
          Last updated: May 2025
        </span>
        <span className="text-xs text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
          View details
        </span>
      </div>
    </div>
  );
};

export default AIVisualization;