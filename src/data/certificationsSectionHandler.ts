import aice_cert_cover from '../StaticFiles/aice_cert_cover.png'

export interface CertificationItem {
    course_title: string,
    course_description: string,
    issuing_organization: string,
    issue_date: string,
    cover_image: string
}


export let certificationsArray: CertificationItem[] = [
    { 
        course_title: 'Artificial Intelligence Career Essentials', 
        issuing_organization: 'Alx Africa',
        issue_date: 'July, 2024',
        cover_image: aice_cert_cover,
        course_description: "This hands-on course transformed my approach to software development, equipping me with advanced AI knowledge and practical skills in prompt engineering. I now leverage tools like ChatGPT, Github Copilot, Uizard, DeepCodeAG, Tabnine, etc to significantly boost my coding efficiency and problem-solving abilities. By integrating AI into my workflow, I am able to enhance my productivity and code quality, and position myself as a forward-thinking developer ready to excel in the AI-driven tech landscape.",
    }
]

