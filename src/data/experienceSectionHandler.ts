import amalitechLogo from '../assets/AmaliTech Logo.png'
import amalitechLogo2 from '../assets/AmaliTech Logo2.png'

export interface ExperienceItem {
  company: string
  role: string
  workPeriod: string
  responsibilities?: string[]
  companyIcon: string
  technologiesUsed: string[],
  designPrinciplesAndArchitectures: string[],
  nonTechnicalSkills: string[]
}


export const experienceArray: ExperienceItem[] = [
  {
    company: 'AmaliTech',
    role: 'Frontend Graduate Trainee',
    workPeriod: 'April 2025 – December 2025',
    companyIcon: amalitechLogo2,
    technologiesUsed: [
      'JavaScript',
      'TypeScript',
      'Angular',
      'AWS (Solutions Architect)',
      'Jest',
      'Git'
    ],

    designPrinciplesAndArchitectures: [
      'Model–View–Controller (MVC)',
      'Singleton Design Pattern',
      'Server-Side Rendering (SSR)',
      'Separation of Concerns/Modularity',
      'Test Driven Development'
    ],

    nonTechnicalSkills: [
      'Professional communication',
      'Team collaboration',
      'Problem-solving mindset',
      'Time management',
      'Adaptability'
    ],

    responsibilities: [
      'Built and maintained frontend features using Angular and TypeScript',
      'Applied software design principles to structure scalable applications',
      'Collaborated within Agile teams and participated in code reviews',
      'Wrote and maintained unit tests using Jest',
      'Communicated technical concepts clearly in a professional environment'
    ]
  }
]
