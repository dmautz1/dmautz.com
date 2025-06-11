import { Project } from '../components/ProjectCard';
import etlImage from '../assets/projects/etl-pipelines.jpg';
import regularImage from '../assets/projects/regular.jpg';
import rockPaperBooksImage from '../assets/projects/rock-paper-books.jpg';
import ofrDataCatalogImage from '../assets/projects/ofr-data-catalog.jpg';
import pivSyncImage from '../assets/projects/piv-sync.jpg';
import aiAgentPlatformImage from '../assets/projects/ai-agent-platform.jpg';

const projects: Project[] = [
  {
    id: 'ai-agent-platform',
    title: 'AI Agent Platform',
    githubUrl: 'https://github.com/dmautz1/ai-agent-platform',
    description: 'Production-Ready AI Agent Platform - Build, deploy, and scale intelligent agents with multi-provider AI support. A comprehensive framework for building production-ready AI agents with support for Google AI, OpenAI, Anthropic, Grok, DeepSeek, and Meta Llama models through a unified interface.',
    image: aiAgentPlatformImage,
    tags: ['AI', 'Python', 'TypeScript', 'FastAPI', 'React', 'Supabase', 'TailwindCSS'],
    achievements: [
      'Multi-provider AI with 6 LLM providers',
      'Zero-config auto-discoverable agents',
      'Full typescript + pydantic validation',
      'Real-time updates without page refreshes'
    ]
  },
  {
    id: 'regular',
    title: 'Regular',
    liveUrl: 'https://stayregular.io',
    description: 'Stay Regular so you can become exceptional. A freemium app that helps you build good habits through recurring tasks and subscribing to popular programs.',
    image: regularImage,
    tags: ['React', 'Node.js', 'Supabase', 'Vercel', 'MUI', 'Stripe'],
    achievements: [
      'Launched in 2025'
    ]
  },
  {
    id: 'rock-paper-books',
    title: 'Rock Paper Books',
    liveUrl: 'https://instagram.com/rockpaperbooks',
    description: 'A book publishing company that specialized in creating high-quality, beautifully designed classic books.',
    image: rockPaperBooksImage,
    tags: ['Instagram', 'Book Publishing', 'Design', 'Publishing'],
    achievements: [
      'Launched in 2014',
      'Sold 50,000+ books'
    ]
  },
  {
    id: 'etl-pipelines',
    title: 'Treasury OFR - Financial Data ETL Pipelines',
    description: 'Developed and maintained ETL pipelines for 25+ financial datasets using PySpark, Python, Ruby, EMR, Hive, Trino, S3, and Parquet. Implemented automated workflows through Rundeck for efficient data processing.',
    image: etlImage,
    tags: ['PySpark', 'Python', 'EMR', 'Hive', 'Trino', 'S3', 'Parquet', 'Rundeck'],
    achievements: [
      'Processed millions of financial records daily',
      'Converted from on-prem Hadoop to AWS EMR, Spark during mass upgrade',
      'Implemented automated processes for coworkers to load data using Rundeck'
    ]
  },
  {
    id: 'ofr-data-catalog',
    title: 'Treasury OFR - Data Catalog',
    description: 'Developed and maintained the OFR Data Catalog using Ruby on Rails, Bootstrap, jQuery, Blacklight, and Solr. The system provides comprehensive data discovery and access capabilities for financial research data.',
    image: ofrDataCatalogImage,
    tags: ['Ruby on Rails', 'Bootstrap', 'jQuery', 'Blacklight', 'Solr'],
    achievements: [
      'Implemented advanced search capabilities with Solr integration',
      'Developed responsive UI with Bootstrap and jQuery',
      'CRUD backend for managing data sources, users, and permissions',
      'Workflows for approving and tracking data requests'
    ]
  },
  {
    id: 'piv-sync-system',
    title: 'Treasury OFR - PIV Data Synchronization System',
    description: 'Designed and deployed a Personal Identity Verification (PIV) data synchronization system that automated Active Directory, Exchange, and Teams account management. Later transitioned the solution to ServiceNow for enhanced functionality.',
    image: pivSyncImage,
    tags: ['ServiceNow', 'Active Directory', 'Exchange', 'Teams', 'Automation'],
    achievements: [
      'Automated identity management for hundreds of users',
      'Reduced manual account management',
      'Successfully migrated system from Rails app to ServiceNow platform'
    ]
  }
];

export default projects;