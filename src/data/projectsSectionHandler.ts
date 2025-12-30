import hotel_finder_cover1 from '../StaticFiles/hotel_finder_cover1.png'
import vag_ems_cover3 from '../StaticFiles/vag_ems3.jpg'
import graphql_server_cover_image from '../StaticFiles/graphql_server_cover_image.png'


export interface ProjectItem {
    projectTitle: string,
    projectDescription: string,
    projectCoverImage: string,
    projectTechnologies: string,
    projectLink: string,
    buttonText: string
}


export let projectsArray: ProjectItem[] = [
    { projectTitle: 'SwiftStay Accommodation Platform', 
        projectDescription: 'An online application that allows users to find hotels and book their stay',
        projectCoverImage: hotel_finder_cover1,
        projectTechnologies: 'JavaScript, ReactJS, MongoDB, React-Bootstrap',
        projectLink: 'https://swiftstay-rovw.onrender.com/',
        buttonText: 'Check It Out Now'
    },
    {
        projectTitle: 'TeamTide - HR Assistant',
        projectDescription: 'A web app that streamlines HR tasks: manage staff details and leave requests efficiently',
        projectCoverImage: vag_ems_cover3,
        projectTechnologies: 'TypeScript, ReactJS, PostgreSQL, Tailwind CSS',
        projectLink: 'https://vag-ems.vercel.app/',
        buttonText: 'Check It Out Now'
    },
    { projectTitle: 'SneakerZone Server', 
        projectDescription: 'The GraphQL backend of the SneakerZone e-commerce application',
        projectCoverImage: graphql_server_cover_image,
        projectTechnologies: 'JavaScript, ApolloGraphQL, MongoDB, Firebase',
        projectLink: 'https://e-commerce-app-server-graphql.onrender.com/',
        buttonText: 'Check It Out Now'
    }

]
