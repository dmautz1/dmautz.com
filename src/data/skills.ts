interface Skill {
  name: string;
  level: number; // 1-5
  category: 'ai' | 'etl' | 'frontend' | 'backend' | 'database' | 'cloud' | 'other';
}

const skills: Skill[] = [
  // AI & Machine Learning Skills
  { name: 'AI Agents', level: 4, category: 'ai' },
  { name: 'LLMs', level: 3, category: 'ai' },
  { name: 'NLP', level: 2, category: 'ai' },
  { name: 'Prompt Engineering', level: 4, category: 'ai' },
  { name: 'Machine Learning Pipelines', level: 3, category: 'ai' },

  // ETL Skills
  { name: 'PySpark', level: 5, category: 'etl' },
  { name: 'ETL Pipeline Design', level: 5, category: 'etl' },
  { name: 'Data Transformation', level: 5, category: 'etl' },
  { name: 'Hive', level: 3, category: 'etl' },
  { name: 'Trino', level: 3, category: 'etl' },
  { name: 'Parquet', level: 4, category: 'etl' },
  { name: 'AWS EMR', level: 4, category: 'etl' },
  { name: 'Data Engineering', level: 5, category: 'etl' },

  // Frontend Skills
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'JavaScript', level: 5, category: 'frontend' },
  { name: 'Vite', level: 4, category: 'frontend' },
  { name: 'Next.js', level: 2, category: 'frontend' },
  { name: 'Bootstrap', level: 4, category: 'frontend' },
  { name: 'jQuery', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', level: 3, category: 'frontend' },

  // Backend Skills
  { name: 'Python', level: 5, category: 'backend' },
  { name: 'Ruby on Rails', level: 5, category: 'backend' },
  { name: 'Ruby', level: 5, category: 'backend' },
  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'FastAPI', level: 4, category: 'backend' },
  { name: 'REST API Design', level: 4, category: 'backend' },
  { name: 'Solidity', level: 3, category: 'backend' },
  { name: 'Smart Contracts', level: 3, category: 'backend' },
  
  // Database Skills
  { name: 'SQL', level: 5, category: 'database' },
  { name: 'PostgreSQL', level: 5, category: 'database' },
  { name: 'Supabase', level: 4, category: 'database' },
  { name: 'MySQL', level: 4, category: 'database' },
  { name: 'MongoDB', level: 3, category: 'database' },
  { name: 'NoSQL', level: 2, category: 'database' },
  { name: 'LDAP', level: 3, category: 'database' },
  
  // Cloud & DevOps Skills
  { name: 'AWS', level: 4, category: 'cloud' },
  { name: 'S3', level: 4, category: 'cloud' },
  { name: 'AWS Lambda', level: 4, category: 'cloud' },
  { name: 'EC2', level: 3, category: 'cloud' },
  { name: 'Rundeck', level: 5, category: 'cloud' },
  { name: 'Git', level: 4, category: 'cloud' },
  { name: 'Apache', level: 3, category: 'cloud' },
  { name: 'Nginx', level: 4, category: 'cloud' },
  { name: 'RedHat Linux', level: 3, category: 'cloud' },
  { name: 'Atlassian Bamboo', level: 3, category: 'cloud' },
  { name: 'ServiceNow', level: 4, category: 'cloud' },
  { name: 'Vercel', level: 4, category: 'cloud' },
    
  // Other Skills
  { name: 'Agile/Scrum', level: 5, category: 'other' },
  { name: 'JIRA', level: 5, category: 'other' },
  { name: 'Workflow Automation', level: 5, category: 'other' },
  { name: 'Tableau', level: 3, category: 'other' },
  { name: 'Highcharts', level: 3, category: 'other' },
  { name: 'Cryptocurrency', level: 4, category: 'other' },
  { name: 'Blockchain', level: 4, category: 'other' },
  { name: 'NFTs', level: 4, category: 'other' },
  { name: 'SharePoint', level: 3, category: 'other' },
  { name: 'WordPress', level: 4, category: 'other' }
];

export default skills;