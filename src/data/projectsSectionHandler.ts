import smart_thermostat_simulator from '../assets/smart_thermostat_cover.png';
import stay_finder from '../assets/stayfinder_cover.png'



export interface ProjectItem {
  projectTitle: string;
  projectDescription: string;
  projectCoverImage: string;
  projectTechnologies: string;
  projectLink: string;
  buttonText: string;
}

export let projectsArray: ProjectItem[] = [
  {
    projectTitle: 'StayFinder Hotel Booking',
    projectDescription:
    'A full-stack hotel booking platform for discovering hotels and making reservations. Built with React, Express REST API, Supabase authentication, PostgreSQL, Redux and protected booking flows.',
    projectCoverImage: stay_finder,
    projectTechnologies: 'TypeScript, React, Redux Toolkit, Supabase, PostgreSQL, Express',
    projectLink: 'https://stay-finder-ruby.vercel.app/',
    buttonText: 'View live app',
  },
  {
    projectTitle: 'Smart Thermostat Simulator',
    projectDescription:
      'A frontend simulation of a smart thermostat system that dynamically controls room temperature through heating and cooling modes using state-driven logic and responsive UI updates.',
    projectCoverImage: smart_thermostat_simulator,
    projectTechnologies: 'HTML, CSS, Vanilla JavaScript (No frameworks)',
    projectLink: 'https://smart-thermostat-debugger.vercel.app/',
    buttonText: 'View live app',
  }
];
