import graphql_server_cover_image from '../assets/graphql_server_cover_image.png'
import notopia_cover_image from '../assets/notopia_cover.png'
import smart_thermostat_simulator from '../assets/smart_thermostat_cover.png'
import countries_explorer_cover from '../assets/countries_explorer_cover.png'


export interface ProjectItem {
    projectTitle: string,
    projectDescription: string,
    projectCoverImage: string,
    projectTechnologies: string,
    projectLink: string,
    buttonText: string
}


export let projectsArray: ProjectItem[] = [
    { 
        projectTitle: 'Smart Thermostat Simulator', 
        projectDescription: "A frontend simulation of a smart thermostat system that dynamically controls room temperature through heating and cooling modes using state-driven logic and responsive UI updates.",
        projectCoverImage: smart_thermostat_simulator,
        projectTechnologies: 'HTML, CSS, Vanilla JavaScript (No frameworks)',
        projectLink: 'https://smart-thermostat-debugger.vercel.app/',
        buttonText: 'View live app'
    },
    { 
        projectTitle: 'Notopia - Note Taking Web App', 
        projectDescription: "A fully interactive web app that allows users to create, view, edit, and delete personal notes. Notes persist online, delivering a personalized user experience across sessions.",
        projectCoverImage: notopia_cover_image,
        projectTechnologies: 'TypeScript, Angular, Firebase, SCSS',
        projectLink: 'https://note-taking-web-app-xi.vercel.app/',
        buttonText: 'View live app'
    },
    { 
        projectTitle: 'Countries Explorer', 
        projectDescription: "A country exploration web app that allows users to browse and view country data, powered by REST API integration, NgRx state management, and RxJS for handling asynchronous data streams.",
        projectCoverImage: countries_explorer_cover,
        projectTechnologies: 'TypeScript, Angular, NgRx, RxJS',
        projectLink: 'https://rest-countries-api-two-henna.vercel.app/',
        buttonText: 'View live app'
    },
    { 
        projectTitle: 'SneakerZone GraphQL API', 
        projectDescription: "A GraphQL backend service for a sneaker e-commerce platform, implementing queries and mutations for product management and user operations, with a schema designed for scalability and frontend consumption.",
        projectCoverImage: graphql_server_cover_image,
        projectTechnologies: 'Node.js, JavaScript, ApolloGraphQL, MongoDB, Firebase',
        projectLink: 'https://e-commerce-app-server-graphql.onrender.com/',
        buttonText: 'GraphQL Playground'
    },

]
