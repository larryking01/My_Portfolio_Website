import amalitechLogo from '../assets/AmaliTech Logo.png';
import amalitechLogo2 from '../assets/AmaliTech Logo2.png';

export interface ExperienceItem {
  company: string;
  role: string;
  workPeriod: string;
  description: string[];
  responsibilities?: string[];
  companyIcon: string;
  technologiesUsed: string[];
  designPrinciplesAndArchitectures: string[];
  softSkills: string[];
}


export const experienceArray: ExperienceItem[] = [
  {
    company: 'AmaliTech',
    role: 'Graduate Trainee - Frontend & Cloud Engineering',
    workPeriod: 'Apr 2025 - Dec 2025',
    companyIcon: amalitechLogo2,
    technologiesUsed: [
      'JavaScript',
      'TypeScript',
      'Angular',
      'AWS',
      'Jest',
      'Git',
    ],
    designPrinciplesAndArchitectures: [
      'Model–View–Controller',
      'Singleton Design Pattern',
      'Server-Side Rendering',
      'Separation of Concerns',
      'Test Driven Development',
    ],
    softSkills: [
      'Professional communication',
      'Team collaboration',
      'Problem-solving mindset',
      'Time management',
      'Adaptability',
    ],
    description: [
      "Completed an intensive 8-month, full-time Graduate Training Program focused on real-world software development. Built responsive web applications using HTML, CSS, JavaScript, with strong emphasis on DOM manipulation, testing with Jest, and responsive design.",
      "Advanced into TypeScript and Angular, developing production-ready applications using routing, services, HttpClient, reactive forms, RxJS, NgRx, and signals, supported by weekly graded projects and instructor feedback.",
      "Gained hands-on experience with AWS cloud services including EC2, S3, VPCs, Lambda, CloudFormation, load balancing, auto scaling, and monitoring with CloudWatch.",
      "Concluded with a team-based capstone project, strengthening collaboration, Git workflows, and architectural thinking around scalability, performance, and maintainability."
    ],
    responsibilities: [
      'Built and maintained frontend features using Angular and TypeScript',
      'Applied software design principles to structure scalable applications',
      'Collaborated within Agile teams and participated in code reviews',
      'Wrote and maintained unit tests using Jest',
      'Communicated technical concepts clearly in a professional environment',
    ]

  },

  {
    company: 'Freelance Software Developer',
    role: '',
    workPeriod: '2024 - Present',
    companyIcon: amalitechLogo,
    technologiesUsed: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'GraphQL',
      'MongoDB',
      'Firebase',
      'React Native'
    ],
    designPrinciplesAndArchitectures: [
      'Scalability',
      'Reusability',
      'Modularity',
      'Performance Awareness',
      'Maintainability'
    ],
    softSkills: [
      'Client communication',
      'Collaboration',
      'Accountability',
      'Problem-solving mindset',
      'Time management',
      'Adaptability',
    ],
    description: [
      "Worked with clients to design and build web and mobile applications, translating requirements into functional, user-friendly solutions. Delivered responsive applications using React, Express, GraphQL, MongoDB, etc with focus on clean architecture, performance, and maintainability.",
      "Managed projects end-to-end, including requirements gathering, development, testing, deployment, and client communication, while maintaining code quality and meeting deadlines.",
    ],
    responsibilities: [
      'Built and maintained frontend features using Angular and TypeScript',
      'Applied software design principles to structure scalable applications',
      'Collaborated within Agile teams and participated in code reviews',
      'Wrote and maintained unit tests using Jest',
      'Communicated technical concepts clearly in a professional environment',
    ]
  }

];
