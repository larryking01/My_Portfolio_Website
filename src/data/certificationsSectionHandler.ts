import aice_cert_cover from '../assets/aice_cert_cover.png';
import amalitech_gtp_cover from '../assets/amalitech_gtp.jpg'



export interface CertificationItem {
  course_title: string;
  course_description: string;
  issuing_organization: string;
  issue_date: string;
  cover_image: string;
}

export let certificationsArray: CertificationItem[] = [
  {
    course_title: 'AmaliTech Graduate Trainee Program',
    issuing_organization: 'AmaliTech',
    issue_date: 'December, 2025',
    cover_image: amalitech_gtp_cover,
    course_description:
      'This intensive graduate training program strengthened my software engineering skills through hands-on training in modern web development, TypeScript, Angular, testing, and AWS. I gained practical experience building real-world applications, collaborating in Agile teams, applying software engineering best practices, and developing cloud computing skills. The program enhanced my technical depth, problem-solving abilities, and readiness to contribute effectively as a software engineer.',
  },  
  {
    course_title: 'Artificial Intelligence Career Essentials',
    issuing_organization: 'Alx Africa',
    issue_date: 'July, 2024',
    cover_image: aice_cert_cover,
    course_description:
      'This hands-on course transformed my approach to software development, equipping me with advanced AI knowledge and practical skills in prompt engineering. I now leverage tools like ChatGPT, Github Copilot, Cursor, AmazonQ, Claude, etc to significantly boost my coding efficiency and problem-solving abilities. By integrating AI into my workflow, I am able to enhance my productivity and code quality, and position myself as a forward-thinking developer ready to excel in the AI-driven tech landscape.',
  }
];
