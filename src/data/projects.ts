import { Project } from '../components/ProjectCard';

const projects: Project[] = [
  {
    id: 'ofr-data-catalog',
    title: 'OFR Data Catalog',
    description: 'Developed and maintained the OFR Data Catalog using Ruby on Rails, Bootstrap, jQuery, Blacklight, and Solr. The system provides comprehensive data discovery and access capabilities for financial research data.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Ruby on Rails', 'Bootstrap', 'jQuery', 'Blacklight', 'Solr'],
    achievements: [
      'Implemented advanced search capabilities with Solr integration',
      'Developed responsive UI with Bootstrap and jQuery',
      'Created data visualization components for financial data'
    ]
  },
  {
    id: 'piv-sync-system',
    title: 'PIV Data Synchronization System',
    description: 'Designed and deployed a Personal Identity Verification (PIV) data synchronization system that automated Active Directory, Exchange, and Teams account management. Later transitioned the solution to ServiceNow for enhanced functionality.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['ServiceNow', 'Active Directory', 'Exchange', 'Teams', 'Automation'],
    achievements: [
      'Automated identity management for thousands of users',
      'Reduced manual account management by 90%',
      'Successfully migrated system to ServiceNow platform'
    ]
  },
  {
    id: 'etl-pipelines',
    title: 'Financial Data ETL Pipelines',
    description: 'Developed and maintained ETL pipelines for 25+ financial datasets using PySpark, Python, Ruby, EMR, Hive, Trino, S3, and Parquet. Implemented automated workflows through Rundeck for efficient data processing.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['PySpark', 'Python', 'EMR', 'Hive', 'Trino', 'S3', 'Parquet', 'Rundeck'],
    achievements: [
      'Processed millions of financial records daily',
      'Reduced data processing time by 40%',
      'Implemented automated monitoring and alerting'
    ]
  },
  {
    id: 'asset-management',
    title: 'Asset Management System',
    description: 'Built a comprehensive asset management system using Ruby on Rails for tracking and managing organizational resources. The system includes budgeting and performance tracking capabilities.',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'jQuery'],
    achievements: [
      'Streamlined asset tracking and management',
      'Implemented automated reporting features',
      'Reduced manual data entry by 75%'
    ]
  },
  {
    id: 'sharepoint-admin',
    title: 'SharePoint Administration',
    description: 'Administered SharePoint 2010 across 16 offices, developing custom widgets and providing user training. Managed BMC Remedy ticketing, incident, asset, and change management systems.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['SharePoint', 'BMC Remedy', 'IT Management', 'Training'],
    achievements: [
      'Implemented custom SharePoint solutions for 16 offices',
      'Developed and delivered user training programs',
      'Streamlined IT service management processes'
    ]
  }
];

export default projects;