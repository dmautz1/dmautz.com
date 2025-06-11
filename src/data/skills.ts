interface Skill {
  name: string;
  level: number; // 1-5
  category: 'etl' | 'frontend' | 'backend' | 'database' | 'cloud' | 'other';
}

const skills: Skill[] = [
  // ETL Skills
  { name: 'PySpark', level: 5, category: 'etl' },
  { name: 'ETL Pipeline Design', level: 5, category: 'etl' },
  { name: 'Data Transformation', level: 5, category: 'etl' },
  { name: 'Hive', level: 3, category: 'etl' },
  { name: 'Trino', level: 3, category: 'etl' },
  { name: 'Parquet', level: 4, category: 'etl' },
  { name: 'AWS Glue', level: 4, category: 'etl' },
  { name: 'AWS EMR', level: 4, category: 'etl' },

  // Frontend Skills
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'Vite', level: 4, category: 'frontend' },
  { name: 'Next.js', level: 2, category: 'frontend' },
  { name: 'TypeScript', level: 3, category: 'frontend' },
  { name: 'Bootstrap', level: 4, category: 'frontend' },
  { name: 'jQuery', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', level: 3, category: 'frontend' },

  // Backend Skills
  { name: 'Python', level: 5, category: 'backend' },
  { name: 'Ruby on Rails', level: 5, category: 'backend' },
  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'REST API Design', level: 3, category: 'backend' },
  { name: 'FastAPI', level: 3, category: 'backend' },
  
  // Database Skills
  { name: 'SQL', level: 5, category: 'database' },
  { name: 'PostgreSQL', level: 4, category: 'database' },
  { name: 'MySQL', level: 4, category: 'database' },
  { name: 'MongoDB', level: 3, category: 'database' },
  { name: 'NoSQL', level: 2, category: 'database' },
  
  // Cloud & DevOps Skills
  { name: 'AWS', level: 4, category: 'cloud' },
  { name: 'S3', level: 4, category: 'cloud' },
  { name: 'AWS Lambda', level: 3, category: 'cloud' },
  { name: 'Vercel', level: 3, category: 'cloud' },
  { name: 'Supabase', level: 3, category: 'cloud' },
  { name: 'Rundeck', level: 5, category: 'cloud' },
  { name: 'RedHat Linux', level: 4, category: 'cloud' },
  { name: 'ServiceNow', level: 3, category: 'cloud' },
  { name: 'CI/CD', level: 3, category: 'cloud' },
  { name: 'GitHub', level: 4, category: 'cloud' },
    
  // Other Skills
  { name: 'AI', level: 4, category: 'other' },
  { name: 'LLM', level: 4, category: 'other' },
  { name: 'Prompt Engineering', level: 4, category: 'other' },
  { name: 'Git', level: 4, category: 'other' },
  { name: 'Agile/Scrum', level: 5, category: 'other' },
  { name: 'JIRA', level: 4, category: 'other' },
  { name: 'Cryptocurrency', level: 4, category: 'other' },
  { name: 'Blockchain', level: 4, category: 'other' },
  { name: 'NFTs', level: 4, category: 'other' },
  { name: 'SharePoint', level: 3, category: 'other' },
  { name: 'WordPress', level: 4, category: 'other' }
];

export default skills;